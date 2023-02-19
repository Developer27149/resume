<template>
  <h1
    class="text-6xl w-36 font-bold after:block after:h-4 after:bg-purple-400 after:opacity-20 after:relative after:bottom-4 my-8"
  >
    {{ text }}
  </h1>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>
