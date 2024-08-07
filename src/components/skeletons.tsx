import clsx from 'clsx';
import { Skeleton } from './ui/skeleton';

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={clsx('rounded-xl max-w-[172px]', className)}>
      <Skeleton className="h-[256px]" />
      <div className="px-2 py-3 rounded-b-xl grid grid-cols-6 gap-2">
        <Skeleton className="w-5 h-5" />
        <Skeleton className="w-5 h-5" />
        <Skeleton className="w-5 h-5" />
        <Skeleton className="w-5 h-5" />
        <Skeleton className="w-5 h-5" />
        <Skeleton className="w-5 h-5" />
      </div>
      <div className="px-2">
        <Skeleton className="w-full h-10 px-2" />
      </div>
    </div>
  );
}

export function CarouselSkeleton() {
  return (
    <div className="grid grid-cols-2 px-4 lg:grid-cols-6 gap-4 lg:gap-2">
      <CardSkeleton className="hidden lg:block" />
      <CardSkeleton className="hidden lg:block" />
      <CardSkeleton className="hidden lg:block" />
      <CardSkeleton className="hidden lg:block" />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}

export function DetailHeadingSkeleton() {
  return (
    <>
      <Skeleton className="h-20 w-full"/>
      <div className="flex gap-5 pt-4">
        <Skeleton className="w-8 h-6" />
      </div>
    </>
  )
}

export function DetailPosterSkeleton() {
  return <Skeleton className="block w-max[420px] rounded-xl h-32 xl:h-[520px] w-[390]" />
}

export function MovieDetailLinkSkeleton() {
  return (
    <div className="flex gap-3 justify-end">
      <Skeleton className="justify-end w-8 h-6" />
      <Skeleton className="w-24 h-6" />
    </div>
  )
}

export function MovieDetailDescriptionSkeleton() {
  return <Skeleton className="w-full h-32 xl:h-[440px]" />
}

export function MovieDetailButtonSkeleton() {
  return <Skeleton className="w-full h-14" />
}
