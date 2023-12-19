import { Skeleton } from '@/components/skeleton';

export default function SearchLoading() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-2'>
        <Skeleton className='h-[12px] w-[180px]' />
        <Skeleton className='h-[12px] w-[100px]' />
      </div>
      <div className='grid grid-cols-3 gap-6'>
        <Skeleton className='h-[400px] w-[400-px]' />
        <Skeleton className='h-[400px] w-[400-px]' />
        <Skeleton className='h-[400px] w-[400-px]' />
        <Skeleton className='h-[400px] w-[400-px]' />
        <Skeleton className='h-[400px] w-[400-px]' />
        <Skeleton className='h-[400px] w-[400-px]' />
      </div>
    </div>
  )
}