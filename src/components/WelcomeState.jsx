import { IconMovie, IconSearch } from '@tabler/icons-react'

export default function WelcomeState() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-28 text-center animate-fade-in">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute inset-0 rounded-2xl bg-primary/10 animate-pulse" />
        <IconMovie size={40} className="relative text-primary" />
      </div>
      <div className="max-w-sm">
        <h2 className="text-xl font-semibold text-foreground">Discover movies</h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Type a movie title in the search bar to find results.
        </p>
      </div>
      <div className="flex items-center gap-2 text-xs text-muted-foreground/60 mt-2">
        <IconSearch size={13} />
        <span>Powered by The Movie Database</span>
      </div>
    </div>
  )
}
