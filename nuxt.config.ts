// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth"],
  ssr: false,
  dir: { public: "static" },
  auth: {
    provider: {
      type: "authjs",
      trustHost: false,
      defaultProvider: "github",
      addDefaultCallbackUrl: true,
    },
  },
});