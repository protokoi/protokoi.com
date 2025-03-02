<script setup lang="ts">
const headerIsHover = ref<boolean>(false)
const req = ref<number>(0)
const router = useRouter()
onMounted(() => {
  setInterval(() => {
    if (req.value < 45312) {
      req.value = req.value + 13
    }
  }, 1)
})
</script>

<template>
  <div
    class="doto
  flex flex-col items-center lg:justify-center justify-center
  lg:min-h-[500px] min-h-[200px] w-full my-8"
  >
    <div class="w-full flex lg:flex-row flex-col justify-between lg:items-end items-center gap-12">
      <div
        class="flex lg:items-start items-center flex-col select-none"
        @click="router.push('#main')"
        @mouseenter="(_) => headerIsHover = true"
        @mouseleave="(_) => headerIsHover = false"
      >
        <p class="lg:text-7xl text-6xl font-bold">
          {{ "PROTOKOI" }}
        </p>
        <p
          class="ml-0 lg:text-xl text-lg duration-300"
          :class="{
            'ml-2': headerIsHover,
          }"
        >
          <!-- {{ "protokoi" }} -->
          <a
            target="_blank"
            href="https://protokoi.com"
            :class="{
              'lg:font-semibold': headerIsHover,
            }" class="cursor-pointer lg:font-medium font-bold"
          >
            <!-- <Icon name="pixelarticons:github" /> -->
          </a>
        </p>
      </div>
      <!-- <div class="flex flex-col lg:text-right font-bold text-center lg:text-lg text-base justify-center">
        <p> {{ "-> No keys, no limits, just test!" }} </p>
        <p> {{ "-> Fast & easy test API for all your needs" }}</p>
      </div> -->
    </div>
  </div>
</template>
