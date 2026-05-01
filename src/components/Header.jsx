import { IconSearch, IconSun, IconMoon, IconMovie } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Header({ query, onQueryChange, theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center gap-4 px-4">
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <IconMovie size={18} className="text-primary" />
          </div>
          <span className="font-semibold tracking-tight text-foreground">
            MBV <span className="text-muted-foreground font-normal">Movies</span>
          </span>
        </div>

        <div className="relative flex-1 max-w-xl mx-auto">
          <IconSearch
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          />
          <Input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={e => onQueryChange(e.target.value)}
            className="pl-9 bg-secondary/50 border-border/50 h-9 text-sm focus-visible:bg-background transition-colors"
          />
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleTheme}
          className="shrink-0 text-muted-foreground hover:text-foreground"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
        </Button>
      </div>
    </header>
  )
}
