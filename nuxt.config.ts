import { resolve } from 'path'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
  },
  content: {
    markdown: {
      remarkPlugins: ['remark-breaks'],
    },
    sources: {
      obsidianSource: {
        base: resolve(__dirname, '_write/content'),
        driver: 'fs',
      }
    }
  },
})
