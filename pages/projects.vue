<template>
  <CommonHeading text="项目" />
  <div class="grid grid-cols-3 gap-16">
    <div class="items">
      <div
        class="item"
        v-for="(
          { name, description, date, covers, url }, idx
        ) in CONFIG.projects"
        :class="{ active: idx === activeIndex }"
        :key="name"
      >
        <div class="text-[20px] text-white">
          {{ name }}
        </div>
        <section class="line-clamp-2 text-[14px] text-gray-50">
          {{ description }}
        </section>
      </div>
    </div>
    <div class="col-span-2">
      <!-- <img src="~/assets/img/avatar.png" class="w-full" /> -->
      <Carousel
        :items="CONFIG.projects[activeIndex].covers"
        :config="{ isEnablePrevAndNext: false, auto: true }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CONFIG } from "~~/config";
const activeIndex = ref(0);
</script>

<style scoped lang="scss">
.items {
  @apply flex flex-col gap-8;
  .item {
    @apply bg-purple-400 p-6 flex flex-col justify-between gap-8 rounded-sm cursor-pointer;
    transition: all 0.4s ease-in-out;
    &:hover,
    &.active {
      transform: translateX(-6px);
      transform: scale(1.05);
      box-shadow: rgba(152, 88, 225, 0.25) 0px 50px 100px -20px,
        rgba(68, 22, 109, 0.3) 0px 30px 60px -30px;
    }
  }
}
</style>
