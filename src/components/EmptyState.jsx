import { IconMoodSad } from '@tabler/icons-react'

export default function EmptyState({ query }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24 text-center animate-fade-in">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
        <IconMoodSad size={32} className="text-muted-foreground" />
      </div>
      <div>
        <p className="font-medium text-foreground">No results found</p>
        <p className="text-sm text-muted-foreground mt-1">
          No movies matched{' '}
          <span className="text-foreground font-medium">&ldquo;{query}&rdquo;</span>
        </p>
      </div>
    </div>
  )
}
