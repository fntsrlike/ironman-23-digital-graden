<template>
  <article
    class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"
  >
    <dl>
      <dt class="sr-only">Published on</dt>
      <dd
        class="text-base font-medium leading-6 text-gray-500"
      >
        <time v-if="datetime" dateTime="{{datetime}}">
          {{
            DateTime.fromISO(datetime).toLocal().toFormat('yyyy-LL-dd')
          }}
        </time>
      </dd>
    </dl>
    <div class="col-span-3">
      <div>
        <NuxtLink :href="item._path">
          <h3
            class="text-xl font-bold leading-8 tracking-tight text-gray-900"
          >
            {{ item.title }}
          </h3>
        </NuxtLink>
        <div class="flex flex-wrap">
          <PostTag v-for="tag in item.tags" :key="tag" :text="tag" />
        </div>
      </div>
    </div>
  </article>
</template>
<script setup lang="ts">
import { DateTime } from 'luxon'
import { Post } from '@/types/index'

const props = defineProps<{
  item: Post
}>()

const datetime = props.item.published_at
  ? props.item.published_at
  : props.item.created_at
</script>
