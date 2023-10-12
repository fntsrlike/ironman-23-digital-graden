import { Post } from "@/types"
import { startCase } from "@/libraries/formater"

function getTitleByRouteSlug() {
  const route = useRoute()
  const slug = route.name?.toString() || ''
  return startCase(slug)
}

export function useGarden(post : Post|undefined = undefined  ) {
  const title = (post?.title || getTitleByRouteSlug() || '').replace(/^index$/i, '')
  const separator = title ? ' - ' : ''

  const headTitle = computed(() => `${title}${separator}My Digital Garden`)

  if (post) {
    post.head = post.head || {}
    post.head.title = post.head.title || headTitle
    return
  }

  useHead({title: headTitle})
}
