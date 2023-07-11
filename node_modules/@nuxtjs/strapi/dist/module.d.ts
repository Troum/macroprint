import * as _nuxt_schema from '@nuxt/schema';
import { CookieOptions } from 'nuxt/dist/app/composables/cookie';

interface AuthOptions {
    populate?: string | string[];
    fields?: string | string[];
}
interface ModuleOptions {
    /**
     * Strapi API URL
     * @default process.env.STRAPI_URL
     * @example 'http://localhost:1337'
     * @type string
     */
    url?: string;
    /**
    * Strapi Prefix
    * @default '/api'
    * @type string
    */
    prefix?: string;
    /**
     * Strapi Version
     * @default 'v4'
     * @type string
     * @example 'v3'
     */
    version?: 'v4' | 'v3';
    /**
     * Nuxt Cookie Options
     * @default {}
     * @type CookieOptions
    */
    cookie?: CookieOptions;
    /**
     * Strapi Cookie Name
     * @default 'strapi_jwt'
     * @type string
    */
    cookieName?: string;
    /**
     * Strapi Auth Options
     * @default {}
     * @type AuthOptions
     * @example { populate: '*' }
     * @example { populate: ['profile', 'teams'] }
    */
    auth?: AuthOptions;
    /**
     * Add Strapi Admin in Nuxt Devtools
     *
     * Please read the instructions on https://strapi.nuxtjs.org/devtools
     *
     * @default false
    */
    devtools?: boolean;
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions>;

export { AuthOptions, ModuleOptions, _default as default };
