<script setup lang="ts">
import type { Product } from '~/types'
import { ref, watchEffect } from 'vue'

const props = defineProps<{
  product: Product
}>()

const repoDescription = ref<string | null>(null)

async function fetchRepoDescription() {
  if (!props.product.repoUrl)
    return

  const url = new URL(props.product.repoUrl)
  const [owner, repo] = url.pathname.split('/').slice(1, 3)

  const { data } = await useFetch(`https://api.github.com/repos/${owner}/${repo}`)
  const _data = data as any
  if (_data.value && (_data.value.description)) {
    repoDescription.value = _data.value.description
  }
  else {
    repoDescription.value = 'No description available.'
  }
}

watchEffect(() => {
  fetchRepoDescription()
})
</script>

<template>
  <div class="bg-neutral-300 dark:bg-neutral-950 dark:border-neutral-700 border-neutral-300 doto gap-4 w-full flex flex-col p-2">
    <div class="flex flex-row text-xl w-full justify-between">
      <p> {{ props.product.name }} </p>
      <a :href="props.product.repoUrl" target="_blank" class="">
        <Icon name="pixelarticons:github" class="text-xl" />
      </a>
    </div>
    <ProgressBar :value="props.product.loadingValue" />
    <p v-if="repoDescription" class="text-sm">
      {{ repoDescription }}
    </p>
    <div class="flex items-end h-full mt-4">
      <a target="_blank" :href="props.product.url" class="flex border-b items-center gap-2">
        {{ props.product.urlName }}
        <Icon name="pixelarticons:external-link" />
      </a>
    </div>
  </div>
</template>
