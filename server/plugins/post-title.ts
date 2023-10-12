import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { startCase } from "@/libraries/formater"

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file: ParsedContent) => {
    if (!file._id.endsWith('.md')) {
      return
    }

    const isCustomTitle = !!file.title
    if (isCustomTitle) {
      return
    }

    if (file._path) {
      const filename = file._path?.split('/').pop() as string
      file.title = startCase(filename)
      return
    }

    file.title = '<Undefined Title>'
  })
})
