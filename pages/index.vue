<script setup lang="ts">
import type { Product } from '~/types'

useHead({
  title: 'Protokoi',
})

const productList: Product[] = [
  {
    name: 'KoiJs-Table (Vue)',
    loadingValue: 80,
    url: 'https://koijs.com/',
    repoUrl: 'https://github.com/protokoi/koijs-table.vue',
    urlName: 'koijs.com',
  },
  {
    name: 'ApiKoi',
    loadingValue: 50,
    url: 'https://apikoi.com/',
    repoUrl: 'https://github.com/protokoi/apikoi.vue',
    urlName: 'apikoi.com',
  },
]
</script>

<template>
  <NuxtLayout>
    <Entrance />
    <!-- <SelectResponseType /> -->
    <PageMain>
      <CardProduct v-for="(product, key) in productList" :key :product />
    </PageMain>
  </NuxtLayout>
</template>
