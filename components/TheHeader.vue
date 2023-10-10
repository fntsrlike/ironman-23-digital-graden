<!--TheHeader -->
<template>
  <header class="flex items-center justify-between pt-6 pb-10">
    <div>
      <NuxtLink href="/">
        <div class="flex items-center justify-between">
          <div class="h-6 text-2xl font-semibold sm:block">
            My Digital Garden
          </div>
        </div>
      </NuxtLink>
    </div>
    <div class="flex items-center text-base leading-5">
      <nav class="block">
        <NuxtLink class="p-1 font-medium sm:p-4" href="/about">About</NuxtLink>
        <NuxtLink class="p-1 font-medium sm:p-4" href="/articles">Articles</NuxtLink>
        <NuxtLink class="p-1 font-medium sm:p-4" href="/notes">Notes</NuxtLink>
        <NuxtLink class="p-1 font-medium sm:p-4" href="/literatures">Literatures</NuxtLink>
        <NuxtLink class="p-1 font-medium sm:p-4" href="/moc">MoC</NuxtLink>
      </nav>
      <ThemeToggle />
    </div>
  </header>
</template>
