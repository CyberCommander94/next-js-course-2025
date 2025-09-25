import { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton"

const Top10RacketsListLoader: FC = () => {
  return (
    <div className="w-full mx-auto flex items-center justify-center gap-4 p-4">
      <Skeleton className="left-0 h-10 w-12 bg-gray-200 dark:bg-accent rounded-none" />
      <Skeleton className="left-0 h-[250px] w-full bg-gray-200 dark:bg-accent rounded-none" />
      <Skeleton className="right-0 h-10 w-12 bg-gray-200 dark:bg-accent rounded-none" />
    </div>
  );
}

export default Top10RacketsListLoader;
