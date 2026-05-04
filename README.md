# MBV Movies

A movie search and discovery app built with React, Vite, shadcn/ui, and Tabler Icons. Data is powered by [The Movie Database (TMDb)](https://www.themoviedb.org/) API.

<img width="1366" height="768" alt="Movies" src="https://github.com/user-attachments/assets/c33a2d91-1f0c-4f78-b360-027cf12aa4f2" />


## Features

- **Real-time search** — debounced input fetches results as you type (400 ms delay)
- **Movie cards** — poster, title, release year, rating, and overview excerpt
- **Detail modal** — full info with accessible focus trap and keyboard (Esc) support
- **Skeleton loading** — animated placeholder grid while results load
- **Dark / light theme** — toggleable, persisted via `localStorage`
- **Scroll-to-top button** — fades in after scrolling 300 px down
- **Responsive grid** — 2 → 6 columns depending on viewport width

## Tech stack

| Tool | Purpose |
|---|---|
| [Vite 6](https://vitejs.dev/) | Build tool and dev server |
| [React 18](https://react.dev/) | UI framework |
| [Tailwind CSS v3](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | Accessible component primitives |
| [Radix UI Dialog](https://www.radix-ui.com/primitives/docs/components/dialog) | Modal base |
| [Tabler Icons React](https://tabler.io/icons) | Icon set |
| [TMDb API](https://developer.themoviedb.org/docs) | Movie data |

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

The app runs on `http://localhost:5173` by default.

## Project structure

```
src/
├── App.jsx                  # Root component
├── main.jsx                 # Entry point
├── index.css                # Tailwind directives + CSS variables
├── hooks/
│   ├── useMovies.js         # TMDb fetch logic with debounce + abort
│   └── useTheme.js          # Dark/light toggle with localStorage
├── lib/
│   └── utils.js             # cn() helper (clsx + tailwind-merge)
└── components/
    ├── Header.jsx            # Sticky header with search and theme toggle
    ├── MovieGrid.jsx         # Responsive card grid
    ├── MovieCard.jsx         # Individual movie card with hover animations
    ├── MovieModal.jsx        # Detail dialog (Radix UI)
    ├── Loader.jsx            # Skeleton loading grid
    ├── ScrollToTop.jsx       # Floating scroll-to-top button
    ├── EmptyState.jsx        # No results view
    ├── WelcomeState.jsx      # Initial state before any search
    └── ui/                   # shadcn/ui components
        ├── badge.jsx
        ├── button.jsx
        ├── dialog.jsx
        ├── input.jsx
        └── skeleton.jsx
```

## API key

The TMDb API key is included directly in `src/hooks/useMovies.js` for convenience. For production use, move it to a `.env` file:

```env
VITE_TMDB_API_KEY=your_key_here
```

```js
// src/hooks/useMovies.js
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
```
