// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  modules: [
    "@nuxtjs/tailwindcss", // https://tailwindcss.com/ (Framework CSS)
    "nuxt-icon", // https://icones.js.org/ (Nuxt Icon)
    "nuxt-headlessui", // https://headlessui.com/ (UI Component)
    "@nuxtjs/color-mode", // https://color-mode.nuxtjs.org/ (Theme Color Mode)
    '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html (State Management)
  ],
  plugins: ["~/plugins/PerfectScrollbar.ts"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // Plugins & Module
  typescript: {
    strict: true,
    typeCheck: true,
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
  },
  // Optionally change the default prefix.
  headlessui: {
    prefix: "Headless",
  },
  colorMode: {
    preference: 'light', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: ''
  },
});
