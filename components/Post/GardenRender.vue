<template>
  <ContentRender :value="post" />
</template>
<script setup lang="ts">
import { Post } from '@/types/index'

const { value: post } = defineProps<{
  value: Post
}>()

useGarden(post)

</script>
