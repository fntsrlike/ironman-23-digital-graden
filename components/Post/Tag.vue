<template>
  <NuxtLink
    :href="'/tags/' + kebabCase(text)"
    class="mr-3 text-sm font-medium uppercase text-teal-500 hover:text-teal-600"
  >
    {{ text.split(' ').join('-') }}
  </NuxtLink>
</template>
<script setup>
import { kebabCase } from 'lodash-es/string'

defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>
