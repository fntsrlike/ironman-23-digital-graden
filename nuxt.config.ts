import { resolve } from 'path'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hant-TW',
      },
      title: 'My Digital Garden',
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon'
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
