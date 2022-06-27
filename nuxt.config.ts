import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  ssr: false,
  meta: {
    title: "Aquarium Insider",
  },
  components: {
    dirs: ["~/components/" /*"~/components/assets/"*/],
  },
  css: ["~/assets/css/index.css", "~/assets/css/colours.css"],
});
