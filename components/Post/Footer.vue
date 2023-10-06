<template>
  <footer class="pt-10">
    <div v-if="post.tags?.length > 0">
      <p class="inline mr-2">Tags:</p>
      <ul class="inline">
        <li v-for="tag in post.tags" :key="tag" class="inline">
          <NuxtLink
            :href="'/tags/' + kebabCase(tag)"
            class="mr-3 text-sm font-medium uppercase text-teal-500 hover:text-teal-600"
          >
            {{ tag.split(' ').join('-') }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { kebabCase } from 'lodash-es/string'
import { Post } from '@/types/index'

defineProps<{
 post: Post
}>()
</script>
