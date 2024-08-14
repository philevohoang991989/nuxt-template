<template>
  <div class="grid items-start h-screen lg:flex">
    <SideBar />
    <div class="w-full">
      <header
        class="h-[60px] w-full flex justify-between items-center border-b border-gray-200 dark:border-gray-800 px-4 gap-x-4 min-w-0"
      >
        <h1>Settings</h1>
        <div class="flex gap-2">
          <UButton class="p-2 rounded-full bg-transparent">
            <Icon
              name="iconify i-heroicons:bell"
              class="h-5 w-5 flex-shrink-0 text-white z-50"
          /></UButton>
          <UButton class="p-2 rounded-full">
            <Icon
              name="i-heroicons:plus"
              class="h-5 w-5 flex-shrink-0 text-gray-800 z-50"
            />
          </UButton>
        </div>
      </header>
      <slot />
    </div>
  </div>
</template>
