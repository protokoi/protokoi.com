import PokeAPI, { type INamedApiResource, type IPokemon } from 'pokeapi-typescript'

export const usePokemonStore = defineStore('pokemons', () => {
  const selectedPokemon = ref<{
    name: string | undefined
    details: IPokemon | undefined
  }>({
    name: undefined,
    details: undefined,
  })
  const pokemonList = ref<INamedApiResource<IPokemon>[]>()
  const fetchPokemonList = async () => {
    const _request = PokeAPI.Pokemon.listAll()
    const _response = await _request
    pokemonList.value = _response.results ?? undefined
  }

  const fetchPokemonDetails = async (pokemonUrl: string) => {
    const _request = useFetch(pokemonUrl)
    const _response = await _request.data
    selectedPokemon.value.details = _response ?? undefined
  }

  return {
    selectedPokemon,
    pokemonList,
    fetchPokemonList,
    fetchPokemonDetails,
  }
})
