<template>
  <section>
    <h3>{{ postType.toUpperCase() }}</h3>
    <ol>
      <li v-for="post in data" :key="post._path" class="mb-0 leading-7">
        <span class="inline mr-2">{{ DateTime.fromISO(post.created_at).toLocal().toFormat('yyyy-LL-dd') }}</span>
        <span class="mb-0  "><NuxtLink :to="post._path">{{ post.title }}</NuxtLink></span>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon'

const IsoDateTimeRegExp = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/
const recentlyCount = 5

const props = defineProps<{
  postType: 'articles' | 'notes' | 'literatures' | 'moc'
}>()


const { data } = await useAsyncData(props.postType, () =>
queryContent(props.postType)
    .only(['title', 'created_at', 'published_at', '_path'])
    .where({ published_at: { $eq: IsoDateTimeRegExp } })
    .limit(recentlyCount)
    .sort({ created_at: -1, published_at: -1 })
    .find()
)

</script>
