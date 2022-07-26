import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "Aquarium Insider",
  },
  components: {
    dirs: ["~/components/" /*"~/components/assets/"*/],
  },
  css: ["~/assets/css/index.css", "~/assets/css/colours.css"],
  head: {
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  modules: ["@nuxtjs/color-mode"],
  colorMode: {
    preference: "system",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
});
