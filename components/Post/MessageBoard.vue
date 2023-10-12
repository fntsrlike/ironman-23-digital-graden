<template>
  <section>
    <header>
      <h2>Comments</h2>
    </header>
    <main>
      <VueUtterances :repo="repo" :issueTerm="issueTerm" :theme="theme" :label="label" />
    </main>
  </section>
</template>
<script setup lang="ts">
const route = useRoute()
const slug = route.fullPath

const repo = 'fntsrlike/local-garden'
const issueTerm = slug
const theme = 'github-dark'
const label = 'utterances'

</script>
