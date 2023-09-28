<template>
  <article class="pb-4">
     <header class="pb-6" >
       <h1 class="tracking-tight font-extrabold text-gray-900 text-2xl leading-6 mb-1">
         {{ post.title }}
       </h1>
       <!-- 預計放上發表時間 -->
     </header>
     <div class="my-4 break-word flex flex-col">
       <div class="mr-4">
         <ContentRenderer :value="post" class="prose" />
       </div>
     </div>
     <footer class="pt-10">
       <!-- 預計放上文章標籤 -->
     </footer>
   </article>
</template>
<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types"

interface Post extends ParsedContent {
 title: string
 created_at: string
 published_at: string
 tags: string[]
}

defineProps<{
 post: Post
}>()
</script>
