import { useState, useEffect } from 'react'

const API_KEY = 'bd20282504694a68a463d8ed0e8b26f0'
const BASE_URL = 'https://api.themoviedb.org/3'

export function useMovies(query) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!query.trim()) {
      setMovies([])
      setError(null)
      return
    }

    const controller = new AbortController()

    const fetchMovies = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US`,
          { signal: controller.signal },
        )
        if (!res.ok) throw new Error('Failed to connect to the API')
        const data = await res.json()
        setMovies(data.results || [])
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('Could not load movies. Please try again.')
        }
      } finally {
        setLoading(false)
      }
    }

    const timer = setTimeout(fetchMovies, 400)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [query])

  return { movies, loading, error }
}
