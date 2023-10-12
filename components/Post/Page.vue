<template>
  <article class="pb-4">
     <PostHeader :post="post"/>
     <PostContent :post="post"/>
     <PostFooter :post="post"/>
   </article>
</template>
<script setup lang="ts">
import { Post } from '@/types/index'

const { post } = defineProps<{
 post: Post
}>()

useGarden(post)
</script>
