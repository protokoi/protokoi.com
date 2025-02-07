<script setup lang="ts">
definePageMeta({
  name: 'home',
})

const packageName = '@koijs/table-vue'
const packageInfo = ref<{ name?: string, version?: string }>()

async function fetchPackageInfo() {
  const response = await fetch(`https://registry.npmjs.org/${packageName}`)
  const data = await response.json()
  packageInfo.value = {
    name: data.name,
    version: data['dist-tags'].latest,
  }
}

onMounted(fetchPackageInfo)
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col gap-6">
      <div class="flex justify-between items-center w-96">
        <div class="flex flex-col">
          <p class="text-xl">
            {{ packageInfo?.name ?? 'Loading...' }}
          </p>
          <p class="text-sm">
            {{ packageInfo?.version ?? '' }}
          </p>
        </div>
        <a v-if="packageInfo" href="https://www.npmjs.com/package/@koijs/table-vue" target="_blank">
          <Icon class="text-xl" name="pixelarticons:external-link" />
        </a>
      </div>
    </div>

    <a class="fixed bottom-0 flex gap-2 items-center" href="https://github.com/atlasyigitaydin/koijs-table-vue" target="_blank">
      <p>koijs-table-vue</p>
      <Icon class="text-xl" name="i-pixelarticons:github" />
    </a>
  </NuxtLayout>
</template>
