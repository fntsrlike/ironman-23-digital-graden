<template>
  <Giscus
      id="comments"
      repo="fntsrlike/local-garden"
      repoId="R_kgDOKfSl8Q"
      category="giscus"
      categoryId="DIC_kwDOKfSl8c4CaFL7"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      :theme="theme"
      lang="zh-TW"
      loading="lazy"
    />
</template>
<script setup lang="ts">
import Giscus from '@giscus/vue'
const colorMode = useColorMode()
const theme = computed(() => `${colorMode.value}_protanopia` )
</script>
