import MovieCard from './MovieCard'

export default function MovieGrid({ movies, onSelectMovie }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {movies.map((movie, index) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onSelect={onSelectMovie}
          index={index}
        />
      ))}
    </div>
  )
}
