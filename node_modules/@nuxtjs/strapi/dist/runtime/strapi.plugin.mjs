import { defineNuxtPlugin } from "#app";
import { useStrapiAuth } from "./composables/useStrapiAuth.mjs";
import { useStrapiUser } from "./composables/useStrapiUser.mjs";
export default defineNuxtPlugin(async () => {
  const user = useStrapiUser();
  if (!user.value) {
    const { fetchUser } = useStrapiAuth();
    await fetchUser();
  }
});
