export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    const isMarkdownFile = file._id.endsWith('.md')
    if (!isMarkdownFile) {
      return
    }

    const isCustomSlug = !(typeof file.slug === 'undefined')
    if (!isCustomSlug) {
      return
    }

    const dir = file._file.replace('/index.md', '').split('/').slice(0, -1).join('/')
    const path = dir ? `/${dir}/` : '/'
    file._path = `${path}${file.slug}`
  })
})
