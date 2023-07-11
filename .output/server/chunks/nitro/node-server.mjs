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
  "/breadcrumbs_background.png": {
    "type": "image/png",
    "etag": "\"5bfe3-+PnHwItY+ZEOUsjXnTixq2UZVrw\"",
    "mtime": "2023-07-11T09:36:26.974Z",
    "size": 376803,
    "path": "../public/breadcrumbs_background.png"
  },
  "/favicon-16x16.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"47e-36oPe0DtgBFERr6sWZ1brtW7s2c\"",
    "mtime": "2023-07-11T09:36:26.970Z",
    "size": 1150,
    "path": "../public/favicon-16x16.ico"
  },
  "/favicon-16x16.png": {
    "type": "image/png",
    "etag": "\"55b-e8CMv4xUkDOUNNkkVKIJ4cr0u20\"",
    "mtime": "2023-07-11T09:36:26.970Z",
    "size": 1371,
    "path": "../public/favicon-16x16.png"
  },
  "/favicon-32x32.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-5fuNkQW2eq7QGfCCCitsZxTuzdI\"",
    "mtime": "2023-07-11T09:36:26.970Z",
    "size": 4286,
    "path": "../public/favicon-32x32.ico"
  },
  "/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"78a-HFcATjmRexmyAr6g67Y7ZxvTOFY\"",
    "mtime": "2023-07-11T09:36:26.970Z",
    "size": 1930,
    "path": "../public/favicon-32x32.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-07-11T09:36:26.970Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"38c0-q0+K5OFobHpdburvSjrzRp80Ek4\"",
    "mtime": "2023-07-11T09:36:26.962Z",
    "size": 14528,
    "path": "../public/logo.svg"
  },
  "/white_logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"3913-e1VV1ptShROuz/G5olDg//Au8Us\"",
    "mtime": "2023-07-11T09:36:26.958Z",
    "size": 14611,
    "path": "../public/white_logo.svg"
  },
  "/_nuxt/AmBreadcrumbs-04351cc9.75a87b23.js": {
    "type": "application/javascript",
    "etag": "\"859-qv3okao4earQEK84TvfcZu1b5BM\"",
    "mtime": "2023-07-11T09:36:26.958Z",
    "size": 2137,
    "path": "../public/_nuxt/AmBreadcrumbs-04351cc9.75a87b23.js"
  },
  "/_nuxt/ArticleCard.1b72e06a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2fe-Ap1OkPrUUT+M2HMHr7ICkUIQLrg\"",
    "mtime": "2023-07-11T09:36:26.958Z",
    "size": 766,
    "path": "../public/_nuxt/ArticleCard.1b72e06a.css"
  },
  "/_nuxt/ArticleCard.c1edd64d.js": {
    "type": "application/javascript",
    "etag": "\"4a5-LQabs8G6FRxkZP3zoHNT5iV/ybY\"",
    "mtime": "2023-07-11T09:36:26.958Z",
    "size": 1189,
    "path": "../public/_nuxt/ArticleCard.c1edd64d.js"
  },
  "/_nuxt/DINPro-Black.2b8b1772.ttf": {
    "type": "font/ttf",
    "etag": "\"21e58-oWCgrp7t6LA4oVeBzLUML8DpXxI\"",
    "mtime": "2023-07-11T09:36:26.954Z",
    "size": 138840,
    "path": "../public/_nuxt/DINPro-Black.2b8b1772.ttf"
  },
  "/_nuxt/DINPro-Bold.47f809ff.ttf": {
    "type": "font/ttf",
    "etag": "\"21c60-f6wSV2jQG+e0sudcbxxI8IWIcTc\"",
    "mtime": "2023-07-11T09:36:26.954Z",
    "size": 138336,
    "path": "../public/_nuxt/DINPro-Bold.47f809ff.ttf"
  },
  "/_nuxt/DINPro-Light.b2e5d402.ttf": {
    "type": "font/ttf",
    "etag": "\"21d08-lUUigpPIXG1Jr4vHEsfkWP+nWkI\"",
    "mtime": "2023-07-11T09:36:26.954Z",
    "size": 138504,
    "path": "../public/_nuxt/DINPro-Light.b2e5d402.ttf"
  },
  "/_nuxt/DINPro-Medium.ff506382.ttf": {
    "type": "font/ttf",
    "etag": "\"21cdc-npt6EJVn9YQUiXHxLNJELemuBQc\"",
    "mtime": "2023-07-11T09:36:26.954Z",
    "size": 138460,
    "path": "../public/_nuxt/DINPro-Medium.ff506382.ttf"
  },
  "/_nuxt/DINPro.c36b27da.ttf": {
    "type": "font/ttf",
    "etag": "\"21e78-IT+w3dQaa3U2irs4Cm/J073U9TA\"",
    "mtime": "2023-07-11T09:36:26.954Z",
    "size": 138872,
    "path": "../public/_nuxt/DINPro.c36b27da.ttf"
  },
  "/_nuxt/MapComponent.276e1776.js": {
    "type": "application/javascript",
    "etag": "\"420-KCX0dwaRlEsoIglDIYrmEBqKnUg\"",
    "mtime": "2023-07-11T09:36:26.950Z",
    "size": 1056,
    "path": "../public/_nuxt/MapComponent.276e1776.js"
  },
  "/_nuxt/ProductCard.6f77108e.js": {
    "type": "application/javascript",
    "etag": "\"85a3-fOgkA5JtMEGAjiGHPqld0WbweRM\"",
    "mtime": "2023-07-11T09:36:26.950Z",
    "size": 34211,
    "path": "../public/_nuxt/ProductCard.6f77108e.js"
  },
  "/_nuxt/ProductCard.830e49b0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4b3-qGc+KLFEgsVQ2aloVkn1BCWh7mY\"",
    "mtime": "2023-07-11T09:36:26.950Z",
    "size": 1203,
    "path": "../public/_nuxt/ProductCard.830e49b0.css"
  },
  "/_nuxt/VBtn.83ffeb03.js": {
    "type": "application/javascript",
    "etag": "\"268f-6tDfS0FBfrGddsMS/NMHdWibTRw\"",
    "mtime": "2023-07-11T09:36:26.950Z",
    "size": 9871,
    "path": "../public/_nuxt/VBtn.83ffeb03.js"
  },
  "/_nuxt/VBtn.b71135f5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"31ab-bv+u0e+H7481NzDL5bUXS0y3hgg\"",
    "mtime": "2023-07-11T09:36:26.950Z",
    "size": 12715,
    "path": "../public/_nuxt/VBtn.b71135f5.css"
  },
  "/_nuxt/VCard.6b2e677e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"18f6-i5pKbGXLlQnnIfs3TAnmhYwwLkY\"",
    "mtime": "2023-07-11T09:36:26.950Z",
    "size": 6390,
    "path": "../public/_nuxt/VCard.6b2e677e.css"
  },
  "/_nuxt/VCard.ac826a51.js": {
    "type": "application/javascript",
    "etag": "\"10f6-gUTsNGGYrn8JEgNAlPwzd+gyPOw\"",
    "mtime": "2023-07-11T09:36:26.946Z",
    "size": 4342,
    "path": "../public/_nuxt/VCard.ac826a51.js"
  },
  "/_nuxt/VCol.5ac0a211.js": {
    "type": "application/javascript",
    "etag": "\"5cd-EO/+JYNPKTBwnU1LGpsVh7y7/o4\"",
    "mtime": "2023-07-11T09:36:26.946Z",
    "size": 1485,
    "path": "../public/_nuxt/VCol.5ac0a211.js"
  },
  "/_nuxt/VDivider.a6bc6bd5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"22c-2zw2d7QNyGsUs0Zr4/VFyz/kkZg\"",
    "mtime": "2023-07-11T09:36:26.946Z",
    "size": 556,
    "path": "../public/_nuxt/VDivider.a6bc6bd5.css"
  },
  "/_nuxt/VDivider.f4594402.js": {
    "type": "application/javascript",
    "etag": "\"11d04-z0RMxnGPOt7ZtZklPOyL7f751yQ\"",
    "mtime": "2023-07-11T09:36:26.946Z",
    "size": 72964,
    "path": "../public/_nuxt/VDivider.f4594402.js"
  },
  "/_nuxt/VRow.5384e9e0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"47ca-G9tdrbmgh4DMBHg/TKHwH8XvXN4\"",
    "mtime": "2023-07-11T09:36:26.946Z",
    "size": 18378,
    "path": "../public/_nuxt/VRow.5384e9e0.css"
  },
  "/_nuxt/VRow.8d0518cf.js": {
    "type": "application/javascript",
    "etag": "\"743-8FxBl6zT1MXmV6HMT8rAEeyN6Ek\"",
    "mtime": "2023-07-11T09:36:26.946Z",
    "size": 1859,
    "path": "../public/_nuxt/VRow.8d0518cf.js"
  },
  "/_nuxt/_slug_.75476546.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"326-fSTAHU744A8PwANyqZGc8FtmguI\"",
    "mtime": "2023-07-11T09:36:26.942Z",
    "size": 806,
    "path": "../public/_nuxt/_slug_.75476546.css"
  },
  "/_nuxt/_slug_.c2ea0d71.js": {
    "type": "application/javascript",
    "etag": "\"1bb4-L6eU/PYsjqHfGhM+iCN2fqjYirM\"",
    "mtime": "2023-07-11T09:36:26.942Z",
    "size": 7092,
    "path": "../public/_nuxt/_slug_.c2ea0d71.js"
  },
  "/_nuxt/asyncData.19077b26.js": {
    "type": "application/javascript",
    "etag": "\"8a2-xiQcUF9k3OOTu3N9Owk1tWl9GMk\"",
    "mtime": "2023-07-11T09:36:26.942Z",
    "size": 2210,
    "path": "../public/_nuxt/asyncData.19077b26.js"
  },
  "/_nuxt/check.56bbb97f.svg": {
    "type": "image/svg+xml",
    "etag": "\"264-27kOgALpqrMAT9c2UcOtsdeuo6U\"",
    "mtime": "2023-07-11T09:36:26.942Z",
    "size": 612,
    "path": "../public/_nuxt/check.56bbb97f.svg"
  },
  "/_nuxt/curve.9f9c7fe5.svg": {
    "type": "image/svg+xml",
    "etag": "\"ee-jWarJ77sme5Uz2bohxuh0Umaa24\"",
    "mtime": "2023-07-11T09:36:26.942Z",
    "size": 238,
    "path": "../public/_nuxt/curve.9f9c7fe5.svg"
  },
  "/_nuxt/entry.9732c54d.js": {
    "type": "application/javascript",
    "etag": "\"3b5f9-waVcHahwCMeZd7/exeHbAIZnzqs\"",
    "mtime": "2023-07-11T09:36:26.938Z",
    "size": 243193,
    "path": "../public/_nuxt/entry.9732c54d.js"
  },
  "/_nuxt/entry.c46cad39.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"42698-6RnNmB4KGfrMmkrvH/XzLy/7wPk\"",
    "mtime": "2023-07-11T09:36:26.938Z",
    "size": 272024,
    "path": "../public/_nuxt/entry.c46cad39.css"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-07-11T09:36:26.938Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.c23a307b.js": {
    "type": "application/javascript",
    "etag": "\"8d7-l7hPYmHkXspnBbWKew3xEL3gwBE\"",
    "mtime": "2023-07-11T09:36:26.938Z",
    "size": 2263,
    "path": "../public/_nuxt/error-404.c23a307b.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-07-11T09:36:26.934Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-500.b5de2596.js": {
    "type": "application/javascript",
    "etag": "\"75b-5DnCt6pRA9aA/nAVZArvdcg9nHg\"",
    "mtime": "2023-07-11T09:36:26.934Z",
    "size": 1883,
    "path": "../public/_nuxt/error-500.b5de2596.js"
  },
  "/_nuxt/error-component.70b26d6f.js": {
    "type": "application/javascript",
    "etag": "\"478-BW2kwf50/0q7/9e1xlgvaBZCSu0\"",
    "mtime": "2023-07-11T09:36:26.934Z",
    "size": 1144,
    "path": "../public/_nuxt/error-component.70b26d6f.js"
  },
  "/_nuxt/fetch.ab358909.js": {
    "type": "application/javascript",
    "etag": "\"2470-UxCv33lZB0rg7Ixzjgt16cGfgF8\"",
    "mtime": "2023-07-11T09:36:26.934Z",
    "size": 9328,
    "path": "../public/_nuxt/fetch.ab358909.js"
  },
  "/_nuxt/forwardRefs.90653ee7.js": {
    "type": "application/javascript",
    "etag": "\"fa2-z8bw1j/H1rNX68FFo/Jd2X2DWCk\"",
    "mtime": "2023-07-11T09:36:26.934Z",
    "size": 4002,
    "path": "../public/_nuxt/forwardRefs.90653ee7.js"
  },
  "/_nuxt/header.fd0041a5.js": {
    "type": "application/javascript",
    "etag": "\"bd-vaXhkogFnPnUS+D25xUZwcvHLro\"",
    "mtime": "2023-07-11T09:36:26.934Z",
    "size": 189,
    "path": "../public/_nuxt/header.fd0041a5.js"
  },
  "/_nuxt/index.0e65df2d.js": {
    "type": "application/javascript",
    "etag": "\"317a-HcWUyYoEi3Oq5nLiyWbsZeknzLI\"",
    "mtime": "2023-07-11T09:36:26.934Z",
    "size": 12666,
    "path": "../public/_nuxt/index.0e65df2d.js"
  },
  "/_nuxt/index.143e4c8d.js": {
    "type": "application/javascript",
    "etag": "\"126-vBEkb4gC6OIm5gRmk3Jpr7LWXE4\"",
    "mtime": "2023-07-11T09:36:26.930Z",
    "size": 294,
    "path": "../public/_nuxt/index.143e4c8d.js"
  },
  "/_nuxt/index.19f895df.js": {
    "type": "application/javascript",
    "etag": "\"34a-gt0MwtEX4e2xK+OQgpCS+79nO/E\"",
    "mtime": "2023-07-11T09:36:26.930Z",
    "size": 842,
    "path": "../public/_nuxt/index.19f895df.js"
  },
  "/_nuxt/index.22d008d7.js": {
    "type": "application/javascript",
    "etag": "\"ca2-qT4y1QMVyAY50Jy/KJkRfBW47G0\"",
    "mtime": "2023-07-11T09:36:26.930Z",
    "size": 3234,
    "path": "../public/_nuxt/index.22d008d7.js"
  },
  "/_nuxt/index.26dc35c1.js": {
    "type": "application/javascript",
    "etag": "\"126-vBEkb4gC6OIm5gRmk3Jpr7LWXE4\"",
    "mtime": "2023-07-11T09:36:26.930Z",
    "size": 294,
    "path": "../public/_nuxt/index.26dc35c1.js"
  },
  "/_nuxt/index.3dab21bc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"57e9-2n3/uVQl2sqsHKtChEItOQc4BEA\"",
    "mtime": "2023-07-11T09:36:26.926Z",
    "size": 22505,
    "path": "../public/_nuxt/index.3dab21bc.css"
  },
  "/_nuxt/index.3e05d2b3.js": {
    "type": "application/javascript",
    "etag": "\"181-cLvz//2q0LAD8EaQ3XyLCMWdjdw\"",
    "mtime": "2023-07-11T09:36:26.926Z",
    "size": 385,
    "path": "../public/_nuxt/index.3e05d2b3.js"
  },
  "/_nuxt/index.3e1dcfe0.js": {
    "type": "application/javascript",
    "etag": "\"59ca-Q2XUR8vgwFkQC8O/Oxpf7CiSDEE\"",
    "mtime": "2023-07-11T09:36:26.926Z",
    "size": 22986,
    "path": "../public/_nuxt/index.3e1dcfe0.js"
  },
  "/_nuxt/index.5727e961.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2249-IayEqOhnjJwJbQqRYK6qpYseGvY\"",
    "mtime": "2023-07-11T09:36:26.926Z",
    "size": 8777,
    "path": "../public/_nuxt/index.5727e961.css"
  },
  "/_nuxt/index.5735976e.js": {
    "type": "application/javascript",
    "etag": "\"6b0a-J3K58RrkiCeET/tglhGQcrTzJL8\"",
    "mtime": "2023-07-11T09:36:26.926Z",
    "size": 27402,
    "path": "../public/_nuxt/index.5735976e.js"
  },
  "/_nuxt/index.8110bec7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1814-nGdF55BfRbjTEwvZFQpmSd4+UiY\"",
    "mtime": "2023-07-11T09:36:26.926Z",
    "size": 6164,
    "path": "../public/_nuxt/index.8110bec7.css"
  },
  "/_nuxt/index.cc37f8ec.js": {
    "type": "application/javascript",
    "etag": "\"d6c-yIaoQu8RRAXmZOS5A+187SWt0lU\"",
    "mtime": "2023-07-11T09:36:26.926Z",
    "size": 3436,
    "path": "../public/_nuxt/index.cc37f8ec.js"
  },
  "/_nuxt/index.d3718783.js": {
    "type": "application/javascript",
    "etag": "\"4b9-kaCMYm4ddcbZwyivWJ/WvNgQwoc\"",
    "mtime": "2023-07-11T09:36:26.922Z",
    "size": 1209,
    "path": "../public/_nuxt/index.d3718783.js"
  },
  "/_nuxt/index.d4adcfda.js": {
    "type": "application/javascript",
    "etag": "\"126-vBEkb4gC6OIm5gRmk3Jpr7LWXE4\"",
    "mtime": "2023-07-11T09:36:26.922Z",
    "size": 294,
    "path": "../public/_nuxt/index.d4adcfda.js"
  },
  "/_nuxt/index.dd6ab953.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2b0-tgl/LsHud+j02gJf8FCJuWOqfzE\"",
    "mtime": "2023-07-11T09:36:26.922Z",
    "size": 688,
    "path": "../public/_nuxt/index.dd6ab953.css"
  },
  "/_nuxt/index.f1d1a9c7.js": {
    "type": "application/javascript",
    "etag": "\"126-vBEkb4gC6OIm5gRmk3Jpr7LWXE4\"",
    "mtime": "2023-07-11T09:36:26.922Z",
    "size": 294,
    "path": "../public/_nuxt/index.f1d1a9c7.js"
  },
  "/_nuxt/lazy.934186ec.js": {
    "type": "application/javascript",
    "etag": "\"11d-f1pBEuMrdJoanV+OOgms+teKBO8\"",
    "mtime": "2023-07-11T09:36:26.922Z",
    "size": 285,
    "path": "../public/_nuxt/lazy.934186ec.js"
  },
  "/_nuxt/macroprint.6fb49d17.js": {
    "type": "application/javascript",
    "etag": "\"102ed-skICt7RnYixGumku1l98AjWN0PQ\"",
    "mtime": "2023-07-11T09:36:26.918Z",
    "size": 66285,
    "path": "../public/_nuxt/macroprint.6fb49d17.js"
  },
  "/_nuxt/macroprint.b446767a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"512f-fRbzPQvpiGB3sLbm6IAkzw3xrJk\"",
    "mtime": "2023-07-11T09:36:26.918Z",
    "size": 20783,
    "path": "../public/_nuxt/macroprint.b446767a.css"
  },
  "/_nuxt/mdi.a3ba41ab.js": {
    "type": "application/javascript",
    "etag": "\"a5a-fuXqgELRkHAi3m/2uWSWoJsnag8\"",
    "mtime": "2023-07-11T09:36:26.918Z",
    "size": 2650,
    "path": "../public/_nuxt/mdi.a3ba41ab.js"
  },
  "/_nuxt/nuxt-img.1c1dfe06.js": {
    "type": "application/javascript",
    "etag": "\"1d0c-BVgLCxFjeBTs+bk8W+NL0mwjUmk\"",
    "mtime": "2023-07-11T09:36:26.918Z",
    "size": 7436,
    "path": "../public/_nuxt/nuxt-img.1c1dfe06.js"
  },
  "/_nuxt/nuxt-link.0f6c1099.js": {
    "type": "application/javascript",
    "etag": "\"10ec-hHj+rq9yVbHUDN69vDbGleqp0D4\"",
    "mtime": "2023-07-11T09:36:26.918Z",
    "size": 4332,
    "path": "../public/_nuxt/nuxt-link.0f6c1099.js"
  },
  "/_nuxt/polygon.8fab205f.svg": {
    "type": "image/svg+xml",
    "etag": "\"ab-tY2+zpDicDJYYuao/4wrE7r9bTg\"",
    "mtime": "2023-07-11T09:36:26.914Z",
    "size": 171,
    "path": "../public/_nuxt/polygon.8fab205f.svg"
  },
  "/_nuxt/svg-icon.41ceaddd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7d-vwB06WYVQvrUWg2gEVe/33Iad3k\"",
    "mtime": "2023-07-11T09:36:26.914Z",
    "size": 125,
    "path": "../public/_nuxt/svg-icon.41ceaddd.css"
  },
  "/_nuxt/svg-icon.bd449fa8.js": {
    "type": "application/javascript",
    "etag": "\"5db-Nn2tieQJ/yW9jBlVGbfBrjRDa7Q\"",
    "mtime": "2023-07-11T09:36:26.914Z",
    "size": 1499,
    "path": "../public/_nuxt/svg-icon.bd449fa8.js"
  },
  "/_nuxt/tag.daba6275.js": {
    "type": "application/javascript",
    "etag": "\"10f-Xo7kpJLAU6Zql3F/zRw24Z7E4eM\"",
    "mtime": "2023-07-11T09:36:26.914Z",
    "size": 271,
    "path": "../public/_nuxt/tag.daba6275.js"
  },
  "/_nuxt/truncate.es.8a2e234e.js": {
    "type": "application/javascript",
    "etag": "\"54e65-X8gS4ABR4h4PAV8A0tre57V0lh4\"",
    "mtime": "2023-07-11T09:36:26.910Z",
    "size": 347749,
    "path": "../public/_nuxt/truncate.es.8a2e234e.js"
  },
  "/images/vectors/check.svg": {
    "type": "image/svg+xml",
    "etag": "\"264-27kOgALpqrMAT9c2UcOtsdeuo6U\"",
    "mtime": "2023-07-11T09:36:26.966Z",
    "size": 612,
    "path": "../public/images/vectors/check.svg"
  },
  "/images/vectors/curve.svg": {
    "type": "image/svg+xml",
    "etag": "\"ee-jWarJ77sme5Uz2bohxuh0Umaa24\"",
    "mtime": "2023-07-11T09:36:26.962Z",
    "size": 238,
    "path": "../public/images/vectors/curve.svg"
  },
  "/images/vectors/file.svg": {
    "type": "image/svg+xml",
    "etag": "\"437-fpGTxaLxr7+TPd2c8bdXEPfSfGY\"",
    "mtime": "2023-07-11T09:36:26.962Z",
    "size": 1079,
    "path": "../public/images/vectors/file.svg"
  },
  "/images/vectors/horizontal.svg": {
    "type": "image/svg+xml",
    "etag": "\"11b-G6FvyfBgWoNFgbnmabcStfO/P3k\"",
    "mtime": "2023-07-11T09:36:26.962Z",
    "size": 283,
    "path": "../public/images/vectors/horizontal.svg"
  },
  "/images/vectors/marker.svg": {
    "type": "image/svg+xml",
    "etag": "\"9b6-/WCLsNAR2chmv3CjMzkKqkjHmsc\"",
    "mtime": "2023-07-11T09:36:26.962Z",
    "size": 2486,
    "path": "../public/images/vectors/marker.svg"
  },
  "/images/vectors/polygon.svg": {
    "type": "image/svg+xml",
    "etag": "\"ab-tY2+zpDicDJYYuao/4wrE7r9bTg\"",
    "mtime": "2023-07-11T09:36:26.962Z",
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
