<template>
  <div class="my-4 break-word flex flex-row-reverse">
    <div class="md:basis-1/4">
      <PostTableOfContent
        class="my-4"
        :toc="post.body.toc.links"
      ></PostTableOfContent>
    </div>
    <div class="md:basis-3/4 md:mr-4">
      <ContentRenderer :value="post" class="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Post } from '@/types/index'

defineProps<{
  post: Post
}>()
</script>
