import { FC } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

type WaveBarsLoaderProps = {
  className?: string;
};

const WaveBarsLoader: FC<WaveBarsLoaderProps> = ({ className }) => {
  return (
    <section className={cn('w-full flex justify-center items-center', className)}>
      <div className="flex gap-2 justify-center items-end h-12">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Skeleton
            key={idx}
            className={`w-3 h-1 bg-foreground dark:bg-white rounded-none wave-delay-${idx}`}
          />
        ))}
      </div>
    </section>
  );
};

export default WaveBarsLoader;
