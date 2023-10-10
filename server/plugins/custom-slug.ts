export default defineNitroPlugin((nitroApp) => {
  function isCustomSlug(slug: string | undefined) {
    return !(typeof slug === 'undefined')
  }

  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    if (!file._id.endsWith('.md')) {
      return
    }
    const dir = file._file.replace('/index.md', '').split('/').slice(0, -1).join('/')
    const path = dir ? `/${dir}/` : '/'

    console.log(`isCustomSlug: ${isCustomSlug(file.slug)}`)
    console.log(`file._path: ${path}${file.slug}`)

    if (isCustomSlug(file.slug)) {
      file._path = `${path}${file.slug}`

      return
    }
  })
})
