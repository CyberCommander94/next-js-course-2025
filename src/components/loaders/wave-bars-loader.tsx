import { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton"

const WaveBarsLoader: FC = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="flex gap-2 justify-center items-end h-12">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Skeleton
            key={idx}
            className={`w-5 h-3 bg-foreground dark:bg-white rounded-none wave-delay-${idx}`}
          />
        ))}
      </div>
    </section>
  );
}

export default WaveBarsLoader;
