<template>
  <div class="mb-24">
    <ContentDoc>
      <template #default="{ doc }">
        <ContentRenderer :value="doc" />
      </template>
      <template #not-found>
        <p>There has no markdown file for index.</p>
      </template>
    </ContentDoc>
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
