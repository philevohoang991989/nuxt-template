// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-15',
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/icon","@pinia/nuxt"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  ui: {
    safelistColors: ['primary', 'red', 'orange', 'green']
  },
  
  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    '/': { prerender: true }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})