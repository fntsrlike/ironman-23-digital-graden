<template>
  <div class="flex h-screen">
    <div class="m-auto md:mt-24 text-center">
      <div>
        <NuxtLink to="/">
          <div class="pb-5 text-center">
            <img
              src="/img/avatar.png"
              alt="avatar"
              class="rounded-full h-48 mx-auto"
            />
          </div>
          <div class="justify-center">
            <h1 class="text-3xl">Yuehu Lin</h1>
          </div>
          <div class="justify-center">
            <p class="text-xl">Ironman 2023</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "info",
});
</script>
