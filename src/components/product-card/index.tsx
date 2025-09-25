import { FC } from "react";
import type { IRacket } from "@/types/shop-item";
import Link from "next/link";

type ProductCardProps = {
  product: IRacket;
  url: string;
};

const ProductCard: FC<ProductCardProps> = ({ product, url }) => {
  return (
    <article className="grid grid-rows-1 h-full w-full relative pb-[60px] box-border outline-foreground outline-1 bg-white transform transition-transform duration-300 hover:scale-101 will-change-transform">
      <Link href={url} className="flex items-center justify-center max-h-[250px]">
        <img src={product.imageUrl} alt={product.name} className="h-full object-contain"/>
      </Link>
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
