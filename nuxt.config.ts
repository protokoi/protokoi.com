import process from 'node:process'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      tmdbApiKey: process.env.TMDB_API_KEY,
      tmdbBaseUrl: process.env.TMDB_BASE_URL,
    },
  },
})
