<template>
  <section>
    <div class="divide-y divide-gray-200">
      <header class="pt-6 pb-8 space-y-2 md:space-y-5">
        <div>
          <h1 class="tracking-tight font-extrabold text-2xl leading-6 mb-1">
            Tag: {{ tag }}
          </h1>
        </div>
      </header>
      <main>
        <ul>
          <li v-for="item in tagPosts" :key="item._path" class="py-4">
            <ListItem :item="item" />
          </li>
        </ul>
      </main>
    </div>
  </section>
</template>
<script setup lang="ts">
const route = useRoute()
const tag = route.params.slug.toString().toUpperCase()

const { data: tagPosts } = await useAsyncData(() => {
  return queryContent()
    .where({ _dir: { $in: ['articles'] } })
    .where({ tags: { $icontains: tag } })
    .find()
})
</script>
