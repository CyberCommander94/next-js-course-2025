import { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton"

const ProductCardSkeleton: FC = () => {
  return (
    <div className="w-full p-4 border border-gray-200 dark:border-accent bg-transparent">
      <Skeleton className="w-full h-40 bg-gray-200 dark:bg-accent rounded-none mb-4" />
      <div className="flex gap-2 w-full h-[50px]">
        <div className="flex flex-col gap-1 h-full w-full">
          <Skeleton className="h-[20px] w-full bg-gray-200 dark:bg-accent rounded-none mb-1" />
          <Skeleton className="h-[20px] w-5/6 bg-gray-200 dark:bg-accent rounded-none mb-4" />
        </div>
        <Skeleton className="h-[20px] w-[40px] bg-gray-200 dark:bg-accent rounded-none" />
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
