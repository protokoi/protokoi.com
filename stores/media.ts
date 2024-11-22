import TmdbApi from '~/server/services/tmdb'
import type { Media } from '~/types'

export const useMediaStore = defineStore('media', () => {
  const mediaList = ref<Media[]>()
  const fetchMovies = async () => {
    useAsyncData('movies', async () => await TmdbApi.getMovies())
      .then((data) => {
        mediaList.value = data.results ?? undefined
      })
  }

  return {
    mediaList,
    fetchMovies,
  }
})
