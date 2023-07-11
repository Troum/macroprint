import { useRuntimeConfig } from "#app";
export const useStrapiVersion = () => {
  const config = process.server ? useRuntimeConfig() : useRuntimeConfig().public;
  return config.strapi.version;
};
