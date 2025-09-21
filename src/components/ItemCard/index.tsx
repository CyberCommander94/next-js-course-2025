import { FC } from "react";
import type { ShopItem } from "@/types/shop-item";

type ItemCardProps = ShopItem;

const ItemCard: FC<Readonly<{ item: ItemCardProps }>> = ({ item }) => {
  return (
    <article className="grid grid-rows-1 h-full w-full relative pb-[85px]">
      <div className="flex items-center justify-center">
        <img src={item.imageUrl} alt={item.name} className="w-full"/>
      </div>
      <div className="flex justify-between px-2 py-3 w-full overflow-hidden absolute bottom-0 left-0 gap-2">
        <div className="flex flex-col flex-1 min-w-0">
          <p className="text-black font-medium truncate">{item.name}</p>
          <p className="text-black font-light truncate">{item.model}</p>
        </div>
        <p className="text-destructive font-bold">
          €{item.price}
        </p>
      </div>
    </article>
  );
}

export default ItemCard;
