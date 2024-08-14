<template>
  <div>
    <header
      class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer"
    >
      <Logo />
      <h3 class="text-white font-bold">Template Nuxt</h3>
    </header>
    <div class="px-4 grow">
      <div
        class="grid gap-4 space-y-3 lg:space-y-1.5"
        v-for="(item, index) in items"
        :key="index"
      >
        <!-- Render items without children -->
        <NuxtLink
          v-show="!item.children || item.children.length === 0"
          :href="item.path"
          exact-active-class="active"
          class="group relative flex items-center gap-1.5 px-2.5 py-1.5 w-full rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50"
        >
          <Icon
            size="20"
            :name="item.icon"
            class="text-white hover:text-primary-400"
          />
          <span class="text-sm truncate relative">{{ item.title }}</span>
        </NuxtLink>
        <div v-if="item.children.length > 0">
          <UAccordion
            :items="item.children"
            :ui="{ wrapper: 'flex flex-col w-full' }"
          >
            <template #default="{ item, index, open }">
              <UButton
                color="gray"
                variant="ghost"
                class="dark:border-gray-700 px-2 py-1 dark:hover:bg-transparent"
                :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
              >
                <template #settings>
                  <div
                    class="w-6 h-6 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center -my-1"
                  >
                    <UIcon
                      :name="item.icon"
                      class="flex-shrink-0 w-5 h-5 relative text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"
                    />
                  </div>
                </template>

                <span class="text-sm/6 truncate">{{ item.label }}</span>

                <template #trailing>
                  <UIcon
                    name="i-heroicons-chevron-right-20-solid"
                    class="w-5 h-5 ms-auto transform transition-transform duration-200"
                    :class="[open && 'rotate-90']"
                  />
                </template>
              </UButton>
            </template>
            <template #settings class="space-y-3">
              <ul
                class="ml-4 space-y-3 lg:space-y-1.5 border-l border-gray-800"
              >
                <li
                  v-for="(itemSub, index) in item.children[0].subItem"
                  :key="index"
                >
                <NuxtLink
                  :href="itemSub.path"
                  exact-active-class="active-sub"
                  class="group group relative flex items-center gap-1.5 px-2.5 py-1.5 w-full rounded-tl-none rounded-bl-none rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75 text-gray-900 dark:text-white"
                >
                  <span class="text-sm truncate relative">{{
                    itemSub.title
                  }}</span>
                </NuxtLink></li>
              </ul>
            </template>
          </UAccordion>
        </div>
        <!-- Render items with children using UAccordion -->
      </div>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  {
    title: "Overview",
    path: "/overview",
    icon: "humbleicons:dashboard",
    children: [],
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: "mingcute:transfer-3-line",
    children: [],
  },
  {
    title: "Account",
    path: "/account",
    icon: "material-symbols:account-box",
    children: [],
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: "pixelarticons:contact",
    children: [],
  },
  {
    title: "Settings",
    path: "/my-account",
    icon: "mdi:settings-outline",
    children: [
      {
        label: "Settings",
        icon: "mdi:settings-outline",
        defaultOpen: true,
        slot: "settings",
        subItem: [
          {
            title: "My account",
            path: "/my-account",
          },
          {
            title: "Change password",
            path: "/change-password",
          },
        ],
      },
    ],
  },
]);
</script>

<style lang="scss" scoped>
.active-sub {
  background-color: #1f2937;
  border-left: 2px solid #4ade80;
  span {
    color: #4ade80;
    font-weight: 500;
  }
}
.active{
    background-color: #1f2937;
  span {
    color: #4ade80;
    font-weight: 500;
  }
}
</style>
