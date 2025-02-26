import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'color-scheme', content: 'dark' },
      ],
      htmlAttrs: {
        class: 'dark',
      },
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/icon'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
