<script setup lang="ts">
definePageMeta({
  name: 'home',
})
const mediaStore = useMediaStore()

onMounted(async () => (await mediaStore.fetchMovies()))
</script>

<template>
  <NuxtLayout>
    <div class="">
      asd
    </div>
  </NuxtLayout>
</template>
