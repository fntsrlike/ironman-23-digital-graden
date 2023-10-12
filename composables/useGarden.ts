import { Post } from "@/types"
import { startCase } from "@/libraries/formater"

export function useGarden(post : Post|undefined = undefined  ) {
  const route = useRoute()
  const slug = route.name?.toString() || ''
  const title = post?.title || startCase(slug) || ''
  const separator = title ? ' - ' : ''

  const headTitle = computed(() => `${title}${separator}My Digital Garden`)

  if (post) {
    post.head = post.head || {}
    post.head.title = post.head.title || headTitle
  }

  useHead({title: headTitle})
}
