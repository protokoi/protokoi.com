<script setup lang="ts">
defineProps<{
  value: number | undefined
}>()
</script>

<template>
  <div v-if="value" class="text-neutral-500 border-b border-neutral-300 dark:border-neutral-700 doto flex flex-row gap-2 items-center justify-between select-none">
    <div class="flex flex-wrap">
      <div v-for="(i, key) in value / 2" :key class="lg:text-base text-xs">
        +
      </div>
    </div>
    <p> {{ `${value}%` }} </p>
  </div>
</template>
