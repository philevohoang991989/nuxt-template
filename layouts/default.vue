<template>
  <div class="grid items-start h-screen lg:flex">
    <SideBar />
    <div>
      <header
        class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50 lg:mb-0 lg:border-0"
      >
        <div
          class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]"
        >
          <div class="relative inline-flex text-left rtl:text-right"></div>
        </div>
      </header>
      <slot />
    </div>
  </div>
</template>
