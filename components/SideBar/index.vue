<template>
  <div
    class="w-[250px] h-screen flex-col items-stretch relative border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800 flex-shrink-0 hidden lg:flex"
  >
    <NuxtLink to="/" exact-active-class="active">
      <span>Home page</span>
    </NuxtLink>
    <NuxtLink to="/about" exact-active-class="active">
      <span>About page</span>
    </NuxtLink>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
