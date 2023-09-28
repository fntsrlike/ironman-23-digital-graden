<template>
   <article class="pb-4">
      <header class="pb-6" >
        <h1 class="tracking-tight font-extrabold text-gray-900 text-2xl leading-6 mb-1">
          {{ post.title }}
        </h1>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          <time
            v-if="post.published_at"
            :datetime="post.published_at"
            :title="dateFormater(post.published_at)"
          >
            發表於
            {{ dateFormater(post.published_at) }}
          </time>
        </div>
      </header>
      <div class="my-4 break-word flex flex-col">
        <div class="mr-4">
          <ContentRenderer :value="post" class="prose" />
        </div>
      </div>
      <footer class="pt-10">
        <div v-if="post.tags?.length > 0">
          <p class="inline mr-2">Tags:</p>
          <ul class="inline">
            <li v-for="tag in post.tags" :key="tag" class="inline">
              <NuxtLink
                :href="'/tags/' + kebabCase(tag)"
                class="mr-3 text-sm font-medium uppercase text-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
              >
                {{ tag.split(' ').join('-') }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </footer>
    </article>
</template>
<script setup lang="ts">
import { DateTime } from 'luxon'
import { kebabCase } from 'lodash-es/string'
import { ParsedContent } from "@nuxt/content/dist/runtime/types"

interface Post extends ParsedContent {
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

const dateFormater = (date: string) => {
  return DateTime.fromISO(date).toLocal().toFormat(dateFormat)
}

const dateFormat = 'yyyy-LL-dd'
const dateTimeFormat = `${dateFormat} HH:mm`

defineProps<{
  post: Post
}>()
</script>
