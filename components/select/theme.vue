<script setup lang="ts">
const theme = ref<'dark' | 'light'>('light')

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  updateTheme()
}

function updateTheme() {
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark')
  }
  else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('theme', theme.value)
}

onMounted(() => {
  theme.value = (localStorage.getItem('theme') as 'dark' | 'light') || 'light'
  updateTheme()
})
</script>

<template>
  <button class="cursor-pointer text-xl" @click="toggleTheme">
    <Icon v-if="theme === 'light'" name="pixelarticons:moon" />
    <Icon v-if="theme === 'dark'" name="pixelarticons:sun-alt" />
  </button>
</template>
