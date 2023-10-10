<template>
  <footer>
    <div class="flex flex-col items-center">
      <div class="flex space-x-2 text-sm">
        <div>© 2013 - 2023</div>
        <div>{{ ' • ' }}</div>
        <NuxtLink href="/">My Digital Garden</NuxtLink>
      </div>
      <div class="text-sm items-left">
        <div>Ironman</div>
      </div>
      <div>
        <SocialIcon name="mdi:email" href="dev@fntsr.tw" />
        <SocialIcon name="mdi:github" href="https://github.com/fntsrlike" />
        <SocialIcon name="mdi:linkedin" href="https://www.linkedin.com/in/fntsrlike/" />
      </div>
    </div>
  </footer>
</template>
