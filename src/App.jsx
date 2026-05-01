import { useState } from 'react'
import Header from '@/components/Header'
import MovieGrid from '@/components/MovieGrid'
import MovieModal from '@/components/MovieModal'
import Loader from '@/components/Loader'
import EmptyState from '@/components/EmptyState'
import WelcomeState from '@/components/WelcomeState'
import ScrollToTop from '@/components/ScrollToTop'
import { useTheme } from '@/hooks/useTheme'
import { useMovies } from '@/hooks/useMovies'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [query, setQuery] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const { movies, loading, error } = useMovies(query)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header
        query={query}
        onQueryChange={setQuery}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="container mx-auto px-4 py-8">
        {loading && <Loader />}

        {!loading && error && (
          <p className="text-center text-sm text-destructive py-16 animate-fade-in">{error}</p>
        )}

        {!loading && !error && movies.length > 0 && (
          <MovieGrid movies={movies} onSelectMovie={setSelectedMovie} />
        )}

        {!loading && !error && movies.length === 0 && query && (
          <EmptyState query={query} />
        )}

        {!loading && !query && <WelcomeState />}
      </main>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}

      <ScrollToTop />
    </div>
  )
}
