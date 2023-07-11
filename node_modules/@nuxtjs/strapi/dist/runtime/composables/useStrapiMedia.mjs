import { useRuntimeConfig } from "#app";
import { joinURL } from "ufo";
export const useStrapiMedia = (path) => {
  const config = process.server ? useRuntimeConfig() : useRuntimeConfig().public;
  return joinURL(config.strapi.url, path);
};
