'use client';

import { FC, use } from 'react';
import type { IRacket } from '@/types/shop-item';
import Link from 'next/link';
import { UserContext } from '@/providers/user';
import FavoriteButton from '@/components/favorite-button';
import Image from 'next/image';
import { useHydrateFavorite, useIsFavoriteById } from '@/providers/favorite/hooks';

type ProductCardProps = {
  product: IRacket;
  url: string;
};

const ProductCard: FC<ProductCardProps> = ({ product, url }) => {
  const { isAuthorized } = use(UserContext);

  useHydrateFavorite({
    racketId: product.id,
    isFavorite: Boolean(product.userData?.isFavorite),
  });

  const isFavoriteGlobal = useIsFavoriteById({
    id: product.id,
    isFavoriteInitial: Boolean(product.userData?.isFavorite),
  });

  return (
    <article className="grid grid-rows-1 h-full w-full relative pb-[60px] box-border outline-foreground outline-1 bg-white hover:outline-3">
      <div className="w-full h-full py-2 relative">
        {isAuthorized && (
          <FavoriteButton
            isFavorite={isFavoriteGlobal}
            productId={product.id}
            buttonClasses={'absolute top-2 right-2'}
            iconSize={20}
          />
        )}
        <Link href={url} className="max-h-[250px] h-full w-full flex justify-center items-center">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={300}
            height={300}
            className="h-full w-auto object-contain"
          />
        </Link>
      </div>
      <div className="flex justify-between px-2 py-3 w-full overflow-hidden absolute bottom-0 left-0 gap-2">
        <div className="flex flex-col flex-1 min-w-0">
          <p className="text-black font-medium truncate text-sm">{product.name}</p>
          <p className="text-black font-light truncate text-xs">{product.model}</p>
        </div>
        <p className="text-destructive font-medium text-sm">€{product.price}</p>
      </div>
    </article>
  );
};

export default ProductCard;
