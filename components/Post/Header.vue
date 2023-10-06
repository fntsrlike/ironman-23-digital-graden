<template>
  <header class="pb-6" >
    <h1 class="tracking-tight font-extrabold text-gray-900 text-2xl leading-6 mb-1">
      {{ post.title }}
    </h1>
    <div class="text-sm text-gray-600">
      <time
      v-if="post.published_at"
      :datetime="post.published_at"
      :title="dateFormater(post.published_at, dateTimeFormat)"
      >
      發表於
      {{ dateFormater(post.published_at, dateFormat) }}
    </time>
  </div>
  </header>
</template>
<script setup lang="ts">
import { Post } from '@/types/index'
import { DateTime } from 'luxon'

const dateFormat = 'yyyy-LL-dd'
const dateTimeFormat = `${dateFormat} HH:mm`
const dateFormater = (date: string, format: string) => {
 return DateTime.fromISO(date).toLocal().toFormat(format)
}

defineProps<{
 post: Post
}>()
</script>
