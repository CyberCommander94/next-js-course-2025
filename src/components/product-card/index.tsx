"use client"

import { FC, use } from "react";
import type { IRacket } from "@/types/shop-item";
import Link from "next/link";
import { Bookmark } from "lucide-react";
import { UserContext } from '@/providers/user';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
// import { toast } from "sonner"

type ProductCardProps = {
  product: IRacket;
  url: string;
};

const ProductCard: FC<ProductCardProps> = ({ product, url }) => {
  const { user } = use(UserContext);

  // toast("Продукт добавлен в избранные");

  return (
    <article className="grid grid-rows-1 h-full w-full relative pb-[60px] box-border outline-foreground outline-1 bg-white hover:outline-3">
      <div className="w-full h-full py-2 relative">
        { user && 
          <Tooltip >
            <TooltipTrigger className="absolute top-2 right-2" asChild><Bookmark strokeWidth={1} size={20} color="#e7000b" className="cursor-pointer" /></TooltipTrigger>
            <TooltipContent>
              <p>Добавить в избранное</p>
            </TooltipContent>
          </Tooltip>
        }
        <Link href={url} className="max-h-[250px] h-full flex justify-center items-center">
          <img src={product.imageUrl} alt={product.name} className="h-full w-auto object-contain"/>
        </Link>
      </div>
      <div className="flex justify-between px-2 py-3 w-full overflow-hidden absolute bottom-0 left-0 gap-2">
        <div className="flex flex-col flex-1 min-w-0">
          <p className="text-black font-medium truncate text-sm">{product.name}</p>
          <p className="text-black font-light truncate text-xs">{product.model}</p>
        </div>
        <p className="text-destructive font-medium text-sm">
          €{product.price}
        </p>
      </div>
    </article>
  );
}

export default ProductCard;
