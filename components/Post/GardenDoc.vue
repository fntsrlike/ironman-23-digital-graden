<template>
  <ContentDoc>
    <template #default="{ doc }">
      <PostGardenRender :value="(doc as Post)" />
    </template>
    <template #not-found>
      <p>There has no markdown file for index.</p>
    </template>
  </ContentDoc>
</template>
<script setup lang="ts">
import {Post} from '@/types/'
</script>
