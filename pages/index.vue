<template>
  <div class="mb-24">
    <PostGardenDoc />
    <section class="mt-12">
      <header>
        <h2 class="mb-0 inline">Recently</h2>
      </header>
      <RecentlyPostList post-type="articles"/>
      <RecentlyPostList post-type="notes"/>
      <RecentlyPostList post-type="literatures"/>
      <RecentlyPostList post-type="moc"/>
    </section>
  </div>
</template>
<script setup lang="ts">
useGarden()
</script>
