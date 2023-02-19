<template>
  <div class="p-24 flex items-center justify-between">
    <div
      class="p-1 border border-purple-300 rounded-full hover:border-purple-100 transition-colors group"
    >
      <img
        src="~/assets/img/avatar.png"
        class="rounded-full w-16 h-16 group-hover:scale-110 origin-center transition-transform"
      />
    </div>
    <Menu />
  </div>
</template>

<script setup lang="ts">
import Menu from "./Menu.vue";
</script>
