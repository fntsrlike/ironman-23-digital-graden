<template>
  <div>
    <div
      class="flex flex-row divide-gray-200 mt-24 items-center justify-center space-x-6 divide-y-0"
    >
      <div class="space-x-2 pt-6 pb-8 space-y-5">
        <PostTitle>
          Tags
        </PostTitle>
      </div>
      <ul class="flex max-w-lg flex-wrap list-none">
        <li v-for="tag in articleTags" :key="tag" class="mt-2 mb-2 mr-5 no-underline">
          <PostTag :text="tag" />
          <NuxtLink
            :href="'/tags/' + kebabCase(tag)"
            class="-ml-2 text-sm font-semibold uppercase no-underline"
            aria-label="
          posts
          tagged
          ${tag}`"
          >
            ({{ tagsCount[tag] }})
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { kebabCase, toLower } from 'lodash-es/string'

const tagsCount = {}

// [TODO]: extract to composable
const flatten = (tagsList, key) => {
  const _tags = tagsList
    .map((element) => {
      let _e = element

      const whenElementIsPost = typeof element === 'object'
      if (whenElementIsPost) {
        if (!element[key]) {
          // eslint-disable-next-line no-console
          console.log(`[WARN] "${element._path}" has no "${key}" property`)
          element[key] = []
        }
        const tags = element[key]
        const flattened = flatten(tags)
        _e = flattened
      }

      const whenElementIsTag = typeof key === 'undefined'
      if (whenElementIsTag) {
        const tag = toLower(_e)
        tagsCount[tag] = tagsCount[tag] ? tagsCount[tag] + 1 : 1
        _e = tag
      }
      return _e
    })
    .flat(1)
  return _tags
}

const { data } = await useAsyncData('tags', () =>
  queryContent('/articles')
    .only(['tags'])
    .where({ tags: { $exists: true } })
    .where({ published_at: { $ne: null } })
    .find()
)

const flat = [...new Set(flatten(data.value, 'tags'))]
const articleTags = flat.filter((tag) => {
  return typeof tag === 'string' && tag.length > 0
})
</script>
