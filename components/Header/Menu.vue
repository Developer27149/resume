<template>
  <ul class="menu" :style="`--menu-left: ${menuStyle}`">
    <li
      v-for="{ to, title } in linkList"
      :key="to"
      :style="{ opacity: $route.path === to ? '1' : '0.5' }"
    >
      <NuxtLink :to="to"> {{ title }} </NuxtLink>
    </li>

    <li class="mask"></li>
  </ul>
</template>

<script setup lang="ts">
const linkList = [
  {
    title: "关于我",
    to: "/",
  },
  {
    title: "项目",
    to: "/projects",
  },
  {
    title: "简历",
    to: "/resume",
  },
  {
    title: "博客",
    to: "https://blog-dev27149.vercel.app/",
  },
];
const route = useRoute();
const menuStyle = computed(() => {
  const path = route.path;
  return {
    "/": "10px",
    "/projects": "calc(4.5rem + 10px)",
    "/resume": "calc(9rem + 10px)",
  }[path];
});
</script>

<style lang="scss">
.menu {
  @apply flex gap-2 bg-gray-50 p-2 px-2.5 rounded-full relative;
}

.menu li {
  width: 4rem;
  text-align: center;
  background: transparent;
  z-index: 2;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 1 !important;
  }
}

.menu:has(li:nth-child(1):hover) {
  --menu-left: 10px !important;
}
.menu:has(li:nth-child(2):hover) {
  --menu-left: calc(4.5rem + 10px) !important;
}
.menu:has(li:nth-child(3):hover) {
  --menu-left: calc(9rem + 10px) !important;
}
.menu:has(li:nth-child(4):hover) {
  --menu-left: calc(13.5rem + 10px) !important;
}

.menu li.mask {
  width: 4rem;
  position: absolute;
  top: 6px;
  bottom: 6px;
  border-radius: 16px;
  z-index: 1;
  left: var(--menu-left);
  background: #8000801a;
  transition: all 0.3s ease-in-out;
}
</style>
