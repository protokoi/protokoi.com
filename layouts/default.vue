<script setup lang="ts">
</script>

<template>
  <div
    class="
  dark:bg-[#1a1918] dark:text-white
  bg-[#eeedec] text-gray-950
  fixed left-0 top-0 w-screen h-screen
  flex justify-center overflow-auto
  lg:[&::-webkit-scrollbar]:w-3
  lg[&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-neutral-950
  dark:[&::-webkit-scrollbar-track]:bg-transparent
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-100
  "
  >
    <div
      class="
      relative
    lg:w-8/12 w-full flex flex-col items-center
    "
    >
      <slot />
      <div class="flex flex-row gap-6 h-8 items-center absolute top-0 right-0">
        <SelectTheme />
      </div>
    </div>
  </div>
</template>
