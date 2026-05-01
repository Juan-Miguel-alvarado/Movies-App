import { IconStar, IconCalendar, IconX, IconPhoto } from '@tabler/icons-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500'

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null

  const year = movie.release_date?.slice(0, 4) || '—'
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : null
  const posterUrl = movie.poster_path ? `${IMAGE_BASE}${movie.poster_path}` : null

  const ratingColor =
    movie.vote_average >= 7
      ? 'text-emerald-400'
      : movie.vote_average >= 5
        ? 'text-amber-400'
        : 'text-red-400'

  return (
    <Dialog open onOpenChange={open => !open && onClose()}>
      <DialogContent className="p-0 rounded-2xl bg-card border border-border/50 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Poster */}
          <div className="relative w-full md:w-64 shrink-0 bg-muted">
            {posterUrl ? (
              <img
                src={posterUrl}
                alt={movie.title}
                className="w-full h-72 md:h-full object-cover"
              />
            ) : (
              <div className="flex h-72 md:h-full items-center justify-center">
                <IconPhoto size={64} className="text-muted-foreground/20" />
              </div>
            )}
            {/* gradient overlay at bottom of poster on mobile */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent md:hidden" />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-4 p-6 flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <DialogHeader className="flex-1">
                <DialogTitle className="text-foreground pr-2">{movie.title}</DialogTitle>
                {movie.original_title && movie.original_title !== movie.title && (
                  <DialogDescription className="text-muted-foreground text-xs mt-0.5">
                    {movie.original_title}
                  </DialogDescription>
                )}
              </DialogHeader>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="shrink-0 -mt-1 -mr-1 text-muted-foreground hover:text-foreground"
              >
                <IconX size={18} />
              </Button>
            </div>

            {/* Meta badges */}
            <div className="flex flex-wrap gap-2">
              {year !== '—' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <IconCalendar size={11} />
                  {year}
                </Badge>
              )}
              {rating && (
                <Badge variant="secondary" className={`flex items-center gap-1 ${ratingColor}`}>
                  <IconStar size={11} fill="currentColor" />
                  {rating}
                  <span className="text-muted-foreground font-normal">/ 10</span>
                </Badge>
              )}
            </div>

            {/* Release date full */}
            {movie.release_date && (
              <p className="text-xs text-muted-foreground">
                Released: {new Date(movie.release_date + 'T00:00:00').toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            )}

            {/* Overview */}
            {movie.overview ? (
              <p className="text-sm text-foreground/80 leading-relaxed">{movie.overview}</p>
            ) : (
              <p className="text-sm text-muted-foreground italic">No description available.</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
