<script setup lang="ts">
definePageMeta({
  name: 'home',
})

const packageName = '@koijs/table-vue'
const packageInfo = ref<{ name?: string, version?: string, readme?: string }>()

async function fetchPackageInfo() {
  const response = await fetch(`https://registry.npmjs.org/${packageName}`)
  const data = await response.json()
  packageInfo.value = {
    name: data.name,
    version: data['dist-tags'].latest,
    readme: data.readme,
  }
}

onMounted(fetchPackageInfo)
</script>

<template>
  <NuxtLayout>
    <div v-if="packageInfo" class="lg:w-6/12 md:w-8/12 w-full lg:px-0 md:px-0 px-2 flex flex-col h-full justify-start items-start relative gap-12">
      <div class="flex w-full justify-between items-center">
        <div class="flex flex-col">
          <p class="text-xl">
            {{ packageInfo?.name ?? '' }}
          </p>
          <p class="text-sm">
            {{ packageInfo?.version ?? '' }}
          </p>
        </div>
        <div class="flex flex-row items-center gap-4">
          <a
            href="https://github.com/protokoi/koijs-table-vue"
            target="_blank"
            class="flex items-center gap-2 text-xs"
          >
            <!-- <p> atlasyigitaydin </p> -->
            <Icon class="text-xl opacity-70" name="pixelarticons:github" />
          </a>

          <a
            href="https://www.npmjs.com/package/@koijs/table-vue"
            target="_blank"
            class="flex items-center gap-2 text-xs"
          >
            <!-- <p> atlasyigitaydin </p> -->
            <Icon class="text-4xl opacity-70" name="i-mdi:npm" />
          </a>
        </div>
      </div>

      <div class="flex flex-col gap-4 w-full justify-center h-full">
        <div class="flex flex-row justify-between hover:text-red-400 animation-all duration-300 delay-100 hover:ml-2">
          <p> {{ "README.md" }} </p>
          <a target="_blank" href="https://www.npmjs.com/package/@koijs/table-vue">
            <Icon class="text-xl opacity-80" name="i-pixelarticons:external-link" />
          </a>
        </div>
        <div class="overflow-auto" v-html="packageInfo?.readme" />
      </div>
    </div>
    <div v-else>
      {{ "LOADING..." }}
    </div>

    <a class="absolute bottom-0" href="https://www.koijs.com/">
      koijs.com
    </a>
  </NuxtLayout>
</template>
