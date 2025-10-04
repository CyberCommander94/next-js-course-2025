"use client"

import { IRacket } from "@/types/shop-item";
import { FC, use } from "react";
import { UserContext } from '@/providers/user';
import { Bookmark } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
// import { toast } from "sonner"

type Props = {
  data: IRacket;
}

const RacketPageContent: FC<Props> = ({ data }) => {
  const { user } = use(UserContext);

  // toast("Продукт добавлен в избранные");

  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full h-full lg:w-9/12 px-6 lg:px-0 py-4 md:py-10">
        <section className="w-full flex justify-center items-start">
          <img src={data.imageUrl} alt={data.name} className="max-w-[400px] max-h-[400px] w-full h-auto object-contain" />
        </section>
        <section className="flex flex-col h-full w-full gap-2">
          <div className="flex justify-between items-center w-full gap-3">
            <div className="flex gap-3 items-center">
              <p className="text-2xl font-medium">{data.name}</p>
              { user && 
                <Tooltip>
                  <TooltipTrigger asChild><Bookmark strokeWidth={1} size={20} color="#e7000b" className="cursor-pointer" /></TooltipTrigger>
                  <TooltipContent>
                    <p>Добавить в избранное</p>
                  </TooltipContent>
                </Tooltip>
              }
            </div>
            <p className="text-2xl border border-destructive bg-transparent text-destructive px-2 py-1">€{data.price}</p>
          </div>
          <p className="text-sm font-light"><span className="font-medium">Модель: </span>{data.model}</p>
          <p className="text-sm font-light"><span className="font-medium">Бренд: </span>{data.brand.name}</p>
          <p className="text-sm font-light"><span className="font-medium">Год выпуска: </span>{data.year}</p>
          <p className="text-sm font-light mt-2">{data.description}</p>
        </section>
      </div>
    </div>
  );
}

export default RacketPageContent;
