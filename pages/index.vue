<script setup lang="ts">
import type { INamedApiResource, IPokemon } from 'pokeapi-typescript'

definePageMeta({
  name: 'home',
  path: '/',
})

const pokemonStore = usePokemonStore()

const selectPokemon = async (pokemon: INamedApiResource<IPokemon>) => {
  pokemonStore.selectedPokemon.name = pokemon.name
  await pokemonStore.fetchPokemonDetails(pokemon.url)
}

const criteriaString = ref<string>()

const currentPokemonList = computed(() => {
  return pokemonStore.pokemonList?.filter((pokemon) => {
    return criteriaString.value
      ? pokemon.name.toLowerCase().includes(criteriaString.value.toLowerCase())
      : true
  })
})

onMounted(async () => {
  return pokemonStore.fetchPokemonList()
})
</script>

<template>
  <div class="w-full h-full flex">
    <div
      class="flex gap-3 w-96 h-full flex-col justify-around z-50 h-screen overflow-auto cursor-pointer p-4"
    >
      <UInput v-model="criteriaString" />
      <div
        v-for="pokemon in currentPokemonList"
        :key="pokemon.name"
        :class="`${pokemon.name === pokemonStore.selectedPokemon.name ? 'text-green-400 border-green-400' : ''} border border-gray-900 bg-gray-900 rounded py-2 px-3 flex justify-center`"
        @click="selectPokemon(pokemon)"
      >
        <div>
          {{ pokemon.name }}
        </div>
      </div>
    </div>
    <div class="w-full h-full flex justify-center items-center">
      <UCard>
        <template #header>
          {{ pokemonStore.selectedPokemon.name }}
        </template>
        <img
          class="h-96"
          :src="pokemonStore.selectedPokemon.details?.sprites.other['official-artwork'].front_default"
        >
      </UCard>
    </div>
  </div>
</template>
