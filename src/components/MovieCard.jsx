import { IconStar, IconCalendar, IconPhoto } from '@tabler/icons-react'
import { Badge } from '@/components/ui/badge'

const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500'

export default function MovieCard({ movie, onSelect, index }) {
  const year = movie.release_date?.slice(0, 4) || '—'
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : null
  const posterUrl = movie.poster_path ? `${IMAGE_BASE}${movie.poster_path}` : null

  return (
    <article
      className="group relative flex flex-col rounded-xl border border-border/50 bg-card overflow-hidden cursor-pointer
        transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30
        movie-card-enter"
      style={{ animationDelay: `${Math.min(index * 60, 600)}ms` }}
      onClick={() => onSelect(movie)}
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] bg-muted overflow-hidden">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <IconPhoto size={48} className="text-muted-foreground/30" />
          </div>
        )}

        {/* Rating badge overlay */}
        {rating && (
          <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-sm px-2 py-0.5 text-xs font-semibold text-amber-400">
            <IconStar size={11} fill="currentColor" />
            {rating}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-sm leading-tight line-clamp-2 text-foreground">
            {movie.title}
          </h3>
        </div>

        <div className="flex items-center gap-1 text-muted-foreground">
          <IconCalendar size={12} />
          <span className="text-xs">{year}</span>
        </div>

        {movie.overview && (
          <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mt-0.5">
            {movie.overview}
          </p>
        )}
      </div>

      {/* Hover shine */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
        bg-gradient-to-t from-transparent via-transparent to-primary/5 rounded-xl" />
    </article>
  )
}
