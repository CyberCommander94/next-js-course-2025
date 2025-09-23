import { FC } from "react";
import type { ShopItem } from "@/types/shop-item";
import Link from "next/link";

type ItemCardProps = {
  item: ShopItem;
  url: string;
};

const ItemCard: FC<ItemCardProps> = ({ item, url }) => {
  return (
    <article className="grid grid-rows-1 h-full w-full relative pb-[60px] outline-foreground outline-1 bg-white transform transition-transform duration-300 hover:scale-102 will-change-transform">
      <Link href={url} className="block flex items-center justify-center">
        <img src={item.imageUrl} alt={item.name} className="w-full"/>
      </Link>
      <div className="flex justify-between px-2 py-3 w-full overflow-hidden absolute bottom-0 left-0 gap-2">
        <div className="flex flex-col flex-1 min-w-0">
          <p className="text-black font-medium truncate text-sm">{item.name}</p>
          <p className="text-black font-light truncate text-xs">{item.model}</p>
        </div>
        <p className="text-destructive font-medium text-sm">
          €{item.price}
        </p>
      </div>
    </article>
  );
}

export default ItemCard;
