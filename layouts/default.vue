<template>
  <div
    class="flex flex-col min-h-screen"
    style="background: linear-gradient(to right, #fffff6, #8e54e9)"
  >
    <main class="mx-auto w-[1200px] max-w-[90vw]">
      <Header />
      <article>
        <slot />
      </article>
      <footer />
    </main>
  </div>
</template>
