import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file: ParsedContent) => {
    console.log(file._id)
    if (!file._id.endsWith('.md')) {
      return
    }

    file.head = file.head || {}
    const isCustomTitle = !!file.title
    console.log(file.head, isCustomTitle, !!file.head.title)
    if (!isCustomTitle) {
      file.head.title = '深藏若虛'
      return
    }

    file.head.title = `${file.title} - 深藏若虛`
    console.log(file.head)
  })
})
