<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  bodyAttrs: {
    class:
      'bg-white text-gray-700 dark:bg-neutral-900 dark:text-gray-300',
  }
})
</script>
