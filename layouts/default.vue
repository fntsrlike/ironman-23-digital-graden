<template>
  <section class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-4xl xl:px-0 xl:text-lg">
    <div class="flex h-screen flex-col justify-between font-sans">
      <TheHeader />
      <main class="mb-auto prose dark:prose-invert">
        <slot />
      </main>
      <TheFooter />
    </div>
  </section>
</template>
