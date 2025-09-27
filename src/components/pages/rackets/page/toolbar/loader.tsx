import { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const RacketsPageToolbarLoader: FC = () => {
  return (
    <div className="flex justify-end w-full">
      <Skeleton className="h-[30px] w-[180px] bg-gray-200 dark:bg-accent rounded-none" />
    </div>
  );
}

export default RacketsPageToolbarLoader;
