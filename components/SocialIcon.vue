<template>
<a target="_blank" :href="href"
  class="mx-1 text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400">
  <Icon :name="name" class="fill-current"/>
</a>
</template>
<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '',
  }
})
</script>
