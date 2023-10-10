<template>
  <section class="pb-24">
    <div class="divide-y divide-gray-200">
      <header class="pb-8 space-y-2 md:space-y-5">
        <div>
          <h1 class="tracking-tight font-extrabold text-gray-900 text-2xl leading-6 mb-1">
            {{ route.name?.toString().toUpperCase() }}
          </h1>
        </div>
        <ListSearchBar v-model="searchValue" placeholder-text="Search announce" />
      </header>
      <main>
        <ul>
          <li v-for="article in filteredPosts" :key="article._path" class="py-4">
            <ListItem :item="article" />
          </li>
        </ul>
      </main>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { Post } from '@/types/index'
import { DateTime } from 'luxon';

const route = useRoute()
const slug = route.fullPath

const searchValue = ref('')

const { data } = await useAsyncData(slug, () =>
  queryContent(slug)
    .where({ slug: { $ne: slug }, _file: { $not: { $contains: 'index' } } })
    .sort({ created_at: -1, published_at: -1 })
    .find()
)
const posts = data.value as Post[]

const patchedPosts = posts.map((post) => {
  const hasPostTags = !!post.tags
  if (!hasPostTags) {
    post.tags = []
  }
  return post
})

const filteredPosts = computed(() => {
  return patchedPosts.filter((post: Post) => {
    const tags = post.tags.filter((tag) => !!tag)
    const searchContent =
      post.title +
      tags.map((tag: string) => (tag ? tag.split(' ').join('-') : '')) +
      DateTime.fromISO(post.published_at).toFormat('yyyy-LL-dd')
    return searchContent.toLowerCase().includes(searchValue.value.toLowerCase())
  })
})
</script>
