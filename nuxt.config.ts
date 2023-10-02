// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  runtimeConfig: {
    public: {
      YMAPS_API_KEY: process.env.NUXT_PUBLIC_YMAPS_API_KEY || 'fb3b9ba9-fe1c-4dc3-a8af-36b79f8c9609',
      DADATA_API_KEY: process.env.NUXT_PUBLIC_DADATA_API_KEY || 'e566144662bd9544afbbd002a13c55c67539bc65',
    },
  },
  eslint: {
    exclude: ['**/node_modules/**', '**/dist/**'],
  },
})
