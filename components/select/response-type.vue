<script setup lang="ts">
const res = ref<'json' | 'xml'>('json')
const hoveredResType = ref<'json' | 'xml'>()
</script>

<template>
  <div class="w-full flex flex-col gap-1 items-end playfair font-bold text-xl">
    <div
      v-for="(resType, key) in ['json', 'xml']" :key
      class="flex flex-row gap-2 items-center justify-end lg:text-3xl"
    >
      <Icon v-if="resType === res" class="w-12 lg:text-2xl text-lg" name="pixelarticons:play" />
      <p
        class="cursor-pointer text-right duration-300"
        :class="{
          'mr-2': hoveredResType === resType,
        }"
        @mouseenter="(_) => hoveredResType = (resType as 'json' | 'xml')"
        @mouseleave="(_) => hoveredResType = undefined"
        @click="res = (resType as 'json' | 'xml')"
      >
        {{ resType }}
      </p>
    </div>
  </div>
  <!-- <div class="flex flex-col gap-1 w-48">
    <div class="text-right">
      {{ "response_type" }}
    </div>
    <div
      v-for="(resType, key) in ['json', 'xml']" :key
      class="flex flex-row gap-2 items-center justify-end lg:text-4xl"
    >
      <Icon v-if="resType === res" class="w-12 lg:text-xl text-xs" name="pixelarticons:chevron-right" />
      <p
        class="cursor-pointer text-right duration-300"
        :class="{
          'mr-2': hoveredResType === resType,
        }"
        @mouseenter="(_) => hoveredResType = (resType as 'json' | 'xml')"
        @mouseleave="(_) => hoveredResType = undefined"
        @click="res = (resType as 'json' | 'xml')"
      >
        {{ resType }}
      </p>
    </div>
  </div> -->
</template>
