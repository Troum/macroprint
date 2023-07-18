globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, lazyEventHandler, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import { createIPX, createIPXMiddleware } from 'ipx';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "baseURL": "http://127.0.0.1:1337",
    "persistedState": {
      "storage": "localStorage",
      "debug": false,
      "cookieOptions": {}
    },
    "strapi": {
      "url": "http://localhost:1337",
      "prefix": "/api",
      "version": "v4",
      "cookie": {},
      "auth": {},
      "cookieName": "strapi_jwt",
      "devtools": false
    }
  },
  "strapi": {
    "url": "http://localhost:1337",
    "prefix": "/api",
    "version": "v4",
    "cookie": {},
    "auth": {},
    "cookieName": "strapi_jwt",
    "devtools": false
  },
  "ipx": {
    "dir": "../public",
    "domains": [],
    "sharp": {},
    "alias": {}
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/404.svg": {
    "type": "image/svg+xml",
    "etag": "\"112d-k1rQpd5IBrpwZaYOjEFYQg5x8/Y\"",
    "mtime": "2023-07-17T14:08:00.006Z",
    "size": 4397,
    "path": "../public/404.svg"
  },
  "/breadcrumbs_background.png": {
    "type": "image/png",
    "etag": "\"5bfe3-+PnHwItY+ZEOUsjXnTixq2UZVrw\"",
    "mtime": "2023-07-17T14:08:00.006Z",
    "size": 376803,
    "path": "../public/breadcrumbs_background.png"
  },
  "/favicon-16x16.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"47e-36oPe0DtgBFERr6sWZ1brtW7s2c\"",
    "mtime": "2023-07-17T14:08:00.006Z",
    "size": 1150,
    "path": "../public/favicon-16x16.ico"
  },
  "/favicon-16x16.png": {
    "type": "image/png",
    "etag": "\"55b-e8CMv4xUkDOUNNkkVKIJ4cr0u20\"",
    "mtime": "2023-07-17T14:08:00.006Z",
    "size": 1371,
    "path": "../public/favicon-16x16.png"
  },
  "/favicon-32x32.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-5fuNkQW2eq7QGfCCCitsZxTuzdI\"",
    "mtime": "2023-07-17T14:08:00.002Z",
    "size": 4286,
    "path": "../public/favicon-32x32.ico"
  },
  "/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"78a-HFcATjmRexmyAr6g67Y7ZxvTOFY\"",
    "mtime": "2023-07-17T14:08:00.002Z",
    "size": 1930,
    "path": "../public/favicon-32x32.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-07-17T14:08:00.002Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"38c0-q0+K5OFobHpdburvSjrzRp80Ek4\"",
    "mtime": "2023-07-17T14:07:59.994Z",
    "size": 14528,
    "path": "../public/logo.svg"
  },
  "/white_logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"3913-e1VV1ptShROuz/G5olDg//Au8Us\"",
    "mtime": "2023-07-17T14:07:59.990Z",
    "size": 14611,
    "path": "../public/white_logo.svg"
  },
  "/_nuxt/AmBreadcrumbs-04351cc9.b8fb2472.js": {
    "type": "application/javascript",
    "etag": "\"859-xpbDleiJCIdmorR7e4d9OxDY/nU\"",
    "mtime": "2023-07-17T14:07:59.990Z",
    "size": 2137,
    "path": "../public/_nuxt/AmBreadcrumbs-04351cc9.b8fb2472.js"
  },
  "/_nuxt/ArticleCard.985e4a44.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2fe-2Ws+CyFd2u3wv3P/oIz2dgJeKpk\"",
    "mtime": "2023-07-17T14:07:59.990Z",
    "size": 766,
    "path": "../public/_nuxt/ArticleCard.985e4a44.css"
  },
  "/_nuxt/ArticleCard.aee46080.js": {
    "type": "application/javascript",
    "etag": "\"4da-3BY9QaKcVk509dj3C+XjNHc0Duw\"",
    "mtime": "2023-07-17T14:07:59.990Z",
    "size": 1242,
    "path": "../public/_nuxt/ArticleCard.aee46080.js"
  },
  "/_nuxt/DINPro-Black.2b8b1772.ttf": {
    "type": "font/ttf",
    "etag": "\"21e58-oWCgrp7t6LA4oVeBzLUML8DpXxI\"",
    "mtime": "2023-07-17T14:07:59.990Z",
    "size": 138840,
    "path": "../public/_nuxt/DINPro-Black.2b8b1772.ttf"
  },
  "/_nuxt/DINPro-Bold.47f809ff.ttf": {
    "type": "font/ttf",
    "etag": "\"21c60-f6wSV2jQG+e0sudcbxxI8IWIcTc\"",
    "mtime": "2023-07-17T14:07:59.986Z",
    "size": 138336,
    "path": "../public/_nuxt/DINPro-Bold.47f809ff.ttf"
  },
  "/_nuxt/DINPro-Light.b2e5d402.ttf": {
    "type": "font/ttf",
    "etag": "\"21d08-lUUigpPIXG1Jr4vHEsfkWP+nWkI\"",
    "mtime": "2023-07-17T14:07:59.986Z",
    "size": 138504,
    "path": "../public/_nuxt/DINPro-Light.b2e5d402.ttf"
  },
  "/_nuxt/DINPro-Medium.ff506382.ttf": {
    "type": "font/ttf",
    "etag": "\"21cdc-npt6EJVn9YQUiXHxLNJELemuBQc\"",
    "mtime": "2023-07-17T14:07:59.986Z",
    "size": 138460,
    "path": "../public/_nuxt/DINPro-Medium.ff506382.ttf"
  },
  "/_nuxt/DINPro.c36b27da.ttf": {
    "type": "font/ttf",
    "etag": "\"21e78-IT+w3dQaa3U2irs4Cm/J073U9TA\"",
    "mtime": "2023-07-17T14:07:59.986Z",
    "size": 138872,
    "path": "../public/_nuxt/DINPro.c36b27da.ttf"
  },
  "/_nuxt/MapComponent.00552192.js": {
    "type": "application/javascript",
    "etag": "\"41f-+2i0ewKWW58lICrhyQIHDZ1BUBo\"",
    "mtime": "2023-07-17T14:07:59.982Z",
    "size": 1055,
    "path": "../public/_nuxt/MapComponent.00552192.js"
  },
  "/_nuxt/ProductCard.044fb34d.js": {
    "type": "application/javascript",
    "etag": "\"5f4-PFRZvgyyEVFr1apLorWRJZ2u6X4\"",
    "mtime": "2023-07-17T14:07:59.982Z",
    "size": 1524,
    "path": "../public/_nuxt/ProductCard.044fb34d.js"
  },
  "/_nuxt/ProductCard.355a9957.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4b3-QzSpWFYpKp7H68JNSuw4Rx4FeuY\"",
    "mtime": "2023-07-17T14:07:59.982Z",
    "size": 1203,
    "path": "../public/_nuxt/ProductCard.355a9957.css"
  },
  "/_nuxt/VBtn.b71135f5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"31ab-bv+u0e+H7481NzDL5bUXS0y3hgg\"",
    "mtime": "2023-07-17T14:07:59.982Z",
    "size": 12715,
    "path": "../public/_nuxt/VBtn.b71135f5.css"
  },
  "/_nuxt/VBtn.d5ec683f.js": {
    "type": "application/javascript",
    "etag": "\"2685-6nsgeA9olsNgQb/Jif1NLewBk2A\"",
    "mtime": "2023-07-17T14:07:59.982Z",
    "size": 9861,
    "path": "../public/_nuxt/VBtn.d5ec683f.js"
  },
  "/_nuxt/VCard.1be8a828.js": {
    "type": "application/javascript",
    "etag": "\"10f6-Gc4RYxMbNbgWrrHZNsrVQKNayUE\"",
    "mtime": "2023-07-17T14:07:59.982Z",
    "size": 4342,
    "path": "../public/_nuxt/VCard.1be8a828.js"
  },
  "/_nuxt/VCard.6b2e677e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"18f6-i5pKbGXLlQnnIfs3TAnmhYwwLkY\"",
    "mtime": "2023-07-17T14:07:59.978Z",
    "size": 6390,
    "path": "../public/_nuxt/VCard.6b2e677e.css"
  },
  "/_nuxt/VCol.054d5d6d.js": {
    "type": "application/javascript",
    "etag": "\"5cd-mu2QQDvxeHIyeOTeQx3Bia/z6fI\"",
    "mtime": "2023-07-17T14:07:59.978Z",
    "size": 1485,
    "path": "../public/_nuxt/VCol.054d5d6d.js"
  },
  "/_nuxt/VDivider.069a8897.js": {
    "type": "application/javascript",
    "etag": "\"11d04-ZYzI5kQsJKbS/RQWQ//T3xTNnEc\"",
    "mtime": "2023-07-17T14:07:59.978Z",
    "size": 72964,
    "path": "../public/_nuxt/VDivider.069a8897.js"
  },
  "/_nuxt/VDivider.a6bc6bd5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"22c-2zw2d7QNyGsUs0Zr4/VFyz/kkZg\"",
    "mtime": "2023-07-17T14:07:59.978Z",
    "size": 556,
    "path": "../public/_nuxt/VDivider.a6bc6bd5.css"
  },
  "/_nuxt/VMain.3e8a4ed6.js": {
    "type": "application/javascript",
    "etag": "\"10939-43ROlDHBrs2Aai010Tmvf4HolCk\"",
    "mtime": "2023-07-17T14:07:59.978Z",
    "size": 67897,
    "path": "../public/_nuxt/VMain.3e8a4ed6.js"
  },
  "/_nuxt/VMain.b446767a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"512f-fRbzPQvpiGB3sLbm6IAkzw3xrJk\"",
    "mtime": "2023-07-17T14:07:59.978Z",
    "size": 20783,
    "path": "../public/_nuxt/VMain.b446767a.css"
  },
  "/_nuxt/VRow.374036aa.js": {
    "type": "application/javascript",
    "etag": "\"743-JzEWDZNfpCM1V/7M2Fa2aBUeNuA\"",
    "mtime": "2023-07-17T14:07:59.974Z",
    "size": 1859,
    "path": "../public/_nuxt/VRow.374036aa.js"
  },
  "/_nuxt/VRow.5384e9e0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"47ca-G9tdrbmgh4DMBHg/TKHwH8XvXN4\"",
    "mtime": "2023-07-17T14:07:59.974Z",
    "size": 18378,
    "path": "../public/_nuxt/VRow.5384e9e0.css"
  },
  "/_nuxt/_slug_.71ce9623.js": {
    "type": "application/javascript",
    "etag": "\"137e-sXXMKJPTfO3YU+hkvO3CWvieB/Q\"",
    "mtime": "2023-07-17T14:07:59.974Z",
    "size": 4990,
    "path": "../public/_nuxt/_slug_.71ce9623.js"
  },
  "/_nuxt/_slug_.75476546.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"326-fSTAHU744A8PwANyqZGc8FtmguI\"",
    "mtime": "2023-07-17T14:07:59.974Z",
    "size": 806,
    "path": "../public/_nuxt/_slug_.75476546.css"
  },
  "/_nuxt/_slug_.fb2356c3.js": {
    "type": "application/javascript",
    "etag": "\"1bf8-0Chu4qw4oxNTyZICNOyDvk9ZcZA\"",
    "mtime": "2023-07-17T14:07:59.974Z",
    "size": 7160,
    "path": "../public/_nuxt/_slug_.fb2356c3.js"
  },
  "/_nuxt/asyncData.e2e12906.js": {
    "type": "application/javascript",
    "etag": "\"8a2-7cP7lC6kPTxtBm3PhjCrLIPDI54\"",
    "mtime": "2023-07-17T14:07:59.974Z",
    "size": 2210,
    "path": "../public/_nuxt/asyncData.e2e12906.js"
  },
  "/_nuxt/check.56bbb97f.svg": {
    "type": "image/svg+xml",
    "etag": "\"264-27kOgALpqrMAT9c2UcOtsdeuo6U\"",
    "mtime": "2023-07-17T14:07:59.974Z",
    "size": 612,
    "path": "../public/_nuxt/check.56bbb97f.svg"
  },
  "/_nuxt/curve.9f9c7fe5.svg": {
    "type": "image/svg+xml",
    "etag": "\"ee-jWarJ77sme5Uz2bohxuh0Umaa24\"",
    "mtime": "2023-07-17T14:07:59.970Z",
    "size": 238,
    "path": "../public/_nuxt/curve.9f9c7fe5.svg"
  },
  "/_nuxt/defu.573334b8.js": {
    "type": "application/javascript",
    "etag": "\"1c9-Z4dBQ7ydkdnZS4Em8yRzBU+x68o\"",
    "mtime": "2023-07-17T14:07:59.970Z",
    "size": 457,
    "path": "../public/_nuxt/defu.573334b8.js"
  },
  "/_nuxt/entry.1e47a0ae.js": {
    "type": "application/javascript",
    "etag": "\"3ba87-ts4g5j3HSNXTMabI8Q1moYd9v3c\"",
    "mtime": "2023-07-17T14:07:59.970Z",
    "size": 244359,
    "path": "../public/_nuxt/entry.1e47a0ae.js"
  },
  "/_nuxt/entry.b4e41227.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"428ea-HvSbEw8OV0Iw51M1Plgb1+t6r6Y\"",
    "mtime": "2023-07-17T14:07:59.970Z",
    "size": 272618,
    "path": "../public/_nuxt/entry.b4e41227.css"
  },
  "/_nuxt/error-component.e536acf4.js": {
    "type": "application/javascript",
    "etag": "\"921-LrkaeBhRZFUsfT1gTazc7YCh1fo\"",
    "mtime": "2023-07-17T14:07:59.970Z",
    "size": 2337,
    "path": "../public/_nuxt/error-component.e536acf4.js"
  },
  "/_nuxt/fetch.f2efcad8.js": {
    "type": "application/javascript",
    "etag": "\"2470-lJw+2CmPoJuYAhrgcw4PJKmYpIk\"",
    "mtime": "2023-07-17T14:07:59.970Z",
    "size": 9328,
    "path": "../public/_nuxt/fetch.f2efcad8.js"
  },
  "/_nuxt/forwardRefs.c24160f9.js": {
    "type": "application/javascript",
    "etag": "\"fa2-Yu+1s9QWH3aqaMBT2zVy8/qx724\"",
    "mtime": "2023-07-17T14:07:59.966Z",
    "size": 4002,
    "path": "../public/_nuxt/forwardRefs.c24160f9.js"
  },
  "/_nuxt/header.9f80e697.js": {
    "type": "application/javascript",
    "etag": "\"bd-RaVp11C8xJmz4WP0u2jFvIGZVr8\"",
    "mtime": "2023-07-17T14:07:59.966Z",
    "size": 189,
    "path": "../public/_nuxt/header.9f80e697.js"
  },
  "/_nuxt/index.1edb8462.js": {
    "type": "application/javascript",
    "etag": "\"126-fupVLcVByj4iWHAbtA7mC2nEX6A\"",
    "mtime": "2023-07-17T14:07:59.966Z",
    "size": 294,
    "path": "../public/_nuxt/index.1edb8462.js"
  },
  "/_nuxt/index.2bd852d7.js": {
    "type": "application/javascript",
    "etag": "\"347-Xe2A6T6gH5nobWCyeeS1kuxxP/k\"",
    "mtime": "2023-07-17T14:07:59.962Z",
    "size": 839,
    "path": "../public/_nuxt/index.2bd852d7.js"
  },
  "/_nuxt/index.365d262e.js": {
    "type": "application/javascript",
    "etag": "\"34a-Wr8RysZwj/JDBVeGzIPjYdjz9MU\"",
    "mtime": "2023-07-17T14:07:59.962Z",
    "size": 842,
    "path": "../public/_nuxt/index.365d262e.js"
  },
  "/_nuxt/index.3dab21bc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"57e9-2n3/uVQl2sqsHKtChEItOQc4BEA\"",
    "mtime": "2023-07-17T14:07:59.962Z",
    "size": 22505,
    "path": "../public/_nuxt/index.3dab21bc.css"
  },
  "/_nuxt/index.44baeaf8.js": {
    "type": "application/javascript",
    "etag": "\"59cf-/Z5PH5NTOIdXea3kjCFMha1+XhQ\"",
    "mtime": "2023-07-17T14:07:59.962Z",
    "size": 22991,
    "path": "../public/_nuxt/index.44baeaf8.js"
  },
  "/_nuxt/index.4769e037.js": {
    "type": "application/javascript",
    "etag": "\"126-fupVLcVByj4iWHAbtA7mC2nEX6A\"",
    "mtime": "2023-07-17T14:07:59.962Z",
    "size": 294,
    "path": "../public/_nuxt/index.4769e037.js"
  },
  "/_nuxt/index.4cf84f34.js": {
    "type": "application/javascript",
    "etag": "\"d6c-FM7DSAEubD4RKO00qlPBR3/TM2U\"",
    "mtime": "2023-07-17T14:07:59.962Z",
    "size": 3436,
    "path": "../public/_nuxt/index.4cf84f34.js"
  },
  "/_nuxt/index.5727e961.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2249-IayEqOhnjJwJbQqRYK6qpYseGvY\"",
    "mtime": "2023-07-17T14:07:59.962Z",
    "size": 8777,
    "path": "../public/_nuxt/index.5727e961.css"
  },
  "/_nuxt/index.5d25b877.js": {
    "type": "application/javascript",
    "etag": "\"126-fupVLcVByj4iWHAbtA7mC2nEX6A\"",
    "mtime": "2023-07-17T14:07:59.962Z",
    "size": 294,
    "path": "../public/_nuxt/index.5d25b877.js"
  },
  "/_nuxt/index.780ee110.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4b-SXQeCsOQywb71ugz0kyinzb2jmk\"",
    "mtime": "2023-07-17T14:07:59.958Z",
    "size": 75,
    "path": "../public/_nuxt/index.780ee110.css"
  },
  "/_nuxt/index.8110bec7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1814-nGdF55BfRbjTEwvZFQpmSd4+UiY\"",
    "mtime": "2023-07-17T14:07:59.958Z",
    "size": 6164,
    "path": "../public/_nuxt/index.8110bec7.css"
  },
  "/_nuxt/index.9946313f.js": {
    "type": "application/javascript",
    "etag": "\"ca1-Qq53F8skUemgNttZjc9JWHI6ycM\"",
    "mtime": "2023-07-17T14:07:59.958Z",
    "size": 3233,
    "path": "../public/_nuxt/index.9946313f.js"
  },
  "/_nuxt/index.a1756f3a.js": {
    "type": "application/javascript",
    "etag": "\"6b0a-4h1v7FnV4wnI1zL+WAtpJxsGQYs\"",
    "mtime": "2023-07-17T14:07:59.958Z",
    "size": 27402,
    "path": "../public/_nuxt/index.a1756f3a.js"
  },
  "/_nuxt/index.a6719124.js": {
    "type": "application/javascript",
    "etag": "\"4d4-bG+XqR5qBOfKB0VZBVKSv6JIP2g\"",
    "mtime": "2023-07-17T14:07:59.958Z",
    "size": 1236,
    "path": "../public/_nuxt/index.a6719124.js"
  },
  "/_nuxt/index.b626a1a7.js": {
    "type": "application/javascript",
    "etag": "\"349e-5lkBiiqoswISk6oA99CSqOvzowY\"",
    "mtime": "2023-07-17T14:07:59.958Z",
    "size": 13470,
    "path": "../public/_nuxt/index.b626a1a7.js"
  },
  "/_nuxt/index.dd6ab953.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2b0-tgl/LsHud+j02gJf8FCJuWOqfzE\"",
    "mtime": "2023-07-17T14:07:59.954Z",
    "size": 688,
    "path": "../public/_nuxt/index.dd6ab953.css"
  },
  "/_nuxt/index.ebcfc833.js": {
    "type": "application/javascript",
    "etag": "\"126-fupVLcVByj4iWHAbtA7mC2nEX6A\"",
    "mtime": "2023-07-17T14:07:59.954Z",
    "size": 294,
    "path": "../public/_nuxt/index.ebcfc833.js"
  },
  "/_nuxt/lazy.42ea8ac8.js": {
    "type": "application/javascript",
    "etag": "\"11d-cxgJ/udTK9gwzWxqCxwxLMm1wM8\"",
    "mtime": "2023-07-17T14:07:59.954Z",
    "size": 285,
    "path": "../public/_nuxt/lazy.42ea8ac8.js"
  },
  "/_nuxt/macroprint.4bf60175.js": {
    "type": "application/javascript",
    "etag": "\"c3f-UYY//9yqlxOG0vVUKkEScyOYysI\"",
    "mtime": "2023-07-17T14:07:59.954Z",
    "size": 3135,
    "path": "../public/_nuxt/macroprint.4bf60175.js"
  },
  "/_nuxt/mdi.a3ba41ab.js": {
    "type": "application/javascript",
    "etag": "\"a5a-fuXqgELRkHAi3m/2uWSWoJsnag8\"",
    "mtime": "2023-07-17T14:07:59.954Z",
    "size": 2650,
    "path": "../public/_nuxt/mdi.a3ba41ab.js"
  },
  "/_nuxt/nuxt-img.44d0f2c3.js": {
    "type": "application/javascript",
    "etag": "\"1d08-v/MSErUL6WWbThEtcnXvJQb731E\"",
    "mtime": "2023-07-17T14:07:59.954Z",
    "size": 7432,
    "path": "../public/_nuxt/nuxt-img.44d0f2c3.js"
  },
  "/_nuxt/polygon.8fab205f.svg": {
    "type": "image/svg+xml",
    "etag": "\"ab-tY2+zpDicDJYYuao/4wrE7r9bTg\"",
    "mtime": "2023-07-17T14:07:59.950Z",
    "size": 171,
    "path": "../public/_nuxt/polygon.8fab205f.svg"
  },
  "/_nuxt/svg-icon.41ceaddd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7d-vwB06WYVQvrUWg2gEVe/33Iad3k\"",
    "mtime": "2023-07-17T14:07:59.950Z",
    "size": 125,
    "path": "../public/_nuxt/svg-icon.41ceaddd.css"
  },
  "/_nuxt/svg-icon.c859c434.js": {
    "type": "application/javascript",
    "etag": "\"41a-YOZ0DOrHmy8umDM6SPZ/MkTZNKM\"",
    "mtime": "2023-07-17T14:07:59.946Z",
    "size": 1050,
    "path": "../public/_nuxt/svg-icon.c859c434.js"
  },
  "/_nuxt/tag.0bd229d7.js": {
    "type": "application/javascript",
    "etag": "\"10f-G0G+K3XgAM12+ddBUrilUCtZzmk\"",
    "mtime": "2023-07-17T14:07:59.946Z",
    "size": 271,
    "path": "../public/_nuxt/tag.0bd229d7.js"
  },
  "/_nuxt/truncate.es.05a5e278.js": {
    "type": "application/javascript",
    "etag": "\"54e65-txDakQNOXDT2xxgEXdy9IkgaRdc\"",
    "mtime": "2023-07-17T14:07:59.946Z",
    "size": 347749,
    "path": "../public/_nuxt/truncate.es.05a5e278.js"
  },
  "/_nuxt/vueperslides.es.bae6ed27.js": {
    "type": "application/javascript",
    "etag": "\"800d-vKb0JpSm/VMNq/XG9XlVWwbESZQ\"",
    "mtime": "2023-07-17T14:07:59.942Z",
    "size": 32781,
    "path": "../public/_nuxt/vueperslides.es.bae6ed27.js"
  },
  "/images/vectors/check.svg": {
    "type": "image/svg+xml",
    "etag": "\"264-27kOgALpqrMAT9c2UcOtsdeuo6U\"",
    "mtime": "2023-07-17T14:08:00.002Z",
    "size": 612,
    "path": "../public/images/vectors/check.svg"
  },
  "/images/vectors/curve.svg": {
    "type": "image/svg+xml",
    "etag": "\"ee-jWarJ77sme5Uz2bohxuh0Umaa24\"",
    "mtime": "2023-07-17T14:08:00.002Z",
    "size": 238,
    "path": "../public/images/vectors/curve.svg"
  },
  "/images/vectors/file.svg": {
    "type": "image/svg+xml",
    "etag": "\"437-fpGTxaLxr7+TPd2c8bdXEPfSfGY\"",
    "mtime": "2023-07-17T14:07:59.998Z",
    "size": 1079,
    "path": "../public/images/vectors/file.svg"
  },
  "/images/vectors/horizontal.svg": {
    "type": "image/svg+xml",
    "etag": "\"11b-G6FvyfBgWoNFgbnmabcStfO/P3k\"",
    "mtime": "2023-07-17T14:07:59.998Z",
    "size": 283,
    "path": "../public/images/vectors/horizontal.svg"
  },
  "/images/vectors/marker.svg": {
    "type": "image/svg+xml",
    "etag": "\"9b6-/WCLsNAR2chmv3CjMzkKqkjHmsc\"",
    "mtime": "2023-07-17T14:07:59.994Z",
    "size": 2486,
    "path": "../public/images/vectors/marker.svg"
  },
  "/images/vectors/polygon.svg": {
    "type": "image/svg+xml",
    "etag": "\"ab-tY2+zpDicDJYYuao/4wrE7r9bTg\"",
    "mtime": "2023-07-17T14:07:59.994Z",
    "size": 171,
    "path": "../public/images/vectors/polygon.svg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _sgyXX9 = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx;
  const ipxOptions = {
    ...opts || {},
    // TODO: Switch to storage API when ipx supports it
    dir: fileURLToPath(new URL(opts.dir, globalThis._importMeta_.url))
  };
  const ipx = createIPX(ipxOptions);
  const middleware = createIPXMiddleware(ipx);
  return eventHandler(async (event) => {
    event.node.req.url = withLeadingSlash(event.context.params._);
    await middleware(event.node.req, event.node.res);
  });
});

const _lazy_7gbWn8 = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_7gbWn8, lazy: true, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _sgyXX9, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_7gbWn8, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
