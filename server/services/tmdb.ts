const TmdbApi = {
  getMovies: async () => {
    const config = useRuntimeConfig()
    const url = `${config.public.tmdbBaseUrl}/trending/movie/week?api_key=${config.public.tmdbApiKey}`
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`TMDB API request failed with status ${response.status}`)
    }
    return response.json()
  },

  // searchMovies: async (query: string) => {
  //   const config = useRuntimeConfig()
  //   const url = `${config.public.tmdbBaseUrl}/search/movie?api_key=${config.public.tmdbApiKey}&query=${encodeURIComponent(query)}`
  //   const response = await fetch(url)

  //   if (!response.ok) {
  //     throw new Error(`TMDB API request failed with status ${response.status}`)
  //   }
  //   return response.json()
  // },
}

export default TmdbApi
