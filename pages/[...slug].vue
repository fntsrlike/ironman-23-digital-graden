<template>
  <ContentDoc v-slot="{ doc }">
    <PostPage :post="(doc as Post)" />
  </ContentDoc>
</template>
<script setup lang="ts">
import { Post } from '@/types/index'
</script>
