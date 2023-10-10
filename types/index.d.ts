import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'
interface Post extends MarkdownParsedContent {
  title: string
  title_en: string
  slug: string
  aliases: string[]
  description: string
  created_at: string
  published_at: string
  updated_at: string
  tags: string[]
  draft: boolean
}

interface ToC {
  children: ToC[]
  depth: number
  id: string
  text: string
}

export interface MarkdownRoot {
  type: 'root'
  children: MarkdownNode[]
  props?: Record<string, any>
}
export interface Toc {
  title: string
  depth: number
  searchDepth: number
  links: TocLink[]
}


export {Post, ToC}
