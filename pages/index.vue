<template>
  <div class="flex gap-12 items-center">
    <div class="flex-grow">
      <CommonHeading text="你好!" />
      <section class="text-2xl my-4 leading-10" style="width: 86%">
        {{ CONFIG.intro }}
      </section>
      <p class="mt-12 w-[70%] leading-8 intro">
        {{ CONFIG.description }}
      </p>
      <p class="mt-6 w-[70%] leading-8 intro_sub">
        {{ CONFIG.subDescription }}
      </p>
      <div class="flex gap-8 items-center mt-20">
        <a
          :href="email"
          class="rounded-full px-4 py-2 bg-purple-300 hover:bg-purple-500 text-white flex gap-2 items-center max-w-[7rem] justify-center transition-colors"
        >
          <span>联系我</span>
          <Icon name="mdi:email-fast-outline" />
        </a>
        <a
          :href="CONFIG.github"
          class="rounded-full px-4 py-2 bg-purple-300 hover:bg-purple-500 text-white flex gap-2 items-center max-w-[7rem] justify-center transition-colors"
        >
          <span>Github</span>
          <Icon name="mdi:github-box" />
        </a>
      </div>
    </div>
    <div class="w-[460px]">
      <img src="~/assets/img/avatar.png" class="transition-transform yolo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CONFIG } from "~~/config";

const email = `mailto:${CONFIG.email}`;
</script>

<style scope>
@keyframes yolo {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes showDelay {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.6;
  }
}

.yolo {
  animation: yolo 3s infinite ease-in-out;
  max-width: 400px;
  min-width: 400px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.yolo:hover {
  animation-play-state: paused;
}
p.intro {
  opacity: 0;
  animation: showDelay 0.7s ease-in 1s forwards;
}
p.intro_sub {
  opacity: 0;
  animation: showDelay 0.7s ease-in 2s forwards;
}
</style>
