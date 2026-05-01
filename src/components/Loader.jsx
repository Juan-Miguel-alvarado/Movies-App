import { Skeleton } from '@/components/ui/skeleton'

function SkeletonCard() {
  return (
    <div className="flex flex-col rounded-xl border border-border/30 bg-card overflow-hidden">
      <Skeleton className="aspect-[2/3] rounded-none" />
      <div className="p-3 flex flex-col gap-2">
        <Skeleton className="h-4 w-3/4 rounded" />
        <Skeleton className="h-3 w-1/3 rounded" />
        <Skeleton className="h-3 w-full rounded" />
        <Skeleton className="h-3 w-5/6 rounded" />
      </div>
    </div>
  )
}

export default function Loader() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}
