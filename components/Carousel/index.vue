<template>
  <div>
    <ul class="overflow-hidden w-full h-[400px] items">
      <li
        v-for="{ url, imageSrc } in items"
        :key="url"
        class="w-full bg-orange-200 h-[400px] item"
      >
        <a :href="url" class="h-[400px]">
          <img src="~~/assets/img/avatar.png" class="h-[400px]" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: {
    url?: string;
    imageSrc: string;
  }[];
  config: {
    auto: boolean;
    isEnablePrevAndNext: boolean;
  };
}>();
</script>

<style scoped lang="scss">
.items {
  position: relative;
  display: flex;
  .item {
    width: 100%;
  }
}
</style>
