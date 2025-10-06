'use client';

import { IRacket } from '@/types/shop-item';
import { FC, use } from 'react';
import { UserContext } from '@/providers/user';
import FavoriteButton from '@/components/favorite-button';
import Image from 'next/image';
import { useHydrateFavorite, useIsFavoriteById } from '@/providers/favorite/hooks';
import placeholderImg from '@/assets/images/placeholder.png';

type Props = {
  data: IRacket;
};

const RacketPageContent: FC<Props> = ({ data }) => {
  const { isAuthorized } = use(UserContext);

  useHydrateFavorite({
    racketId: data.id,
    isFavorite: Boolean(data.userData?.isFavorite),
  });

  const isFavoriteGlobal = useIsFavoriteById({
    id: data.id,
    isFavoriteInitial: Boolean(data.userData?.isFavorite),
  });

  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full h-full lg:w-9/12 px-6 lg:px-0 py-4 md:py-10">
        <section className="w-full flex justify-center items-start">
          <Image
            src={data.imageUrl || placeholderImg}
            alt={data.name}
            width={400}
            height={400}
            className="w-full h-auto object-contain"
          />
        </section>
        <section className="flex flex-col h-full w-full gap-2">
          <div className="flex justify-between items-center w-full gap-3">
            <div className="flex gap-3 items-center">
              <p className="text-2xl font-medium">{data.name}</p>
              {isAuthorized && (
                <FavoriteButton
                  isFavorite={isFavoriteGlobal}
                  productId={data.id}
                  buttonClasses={''}
                  iconSize={24}
                />
              )}
            </div>
            <p className="text-2xl border border-destructive bg-transparent text-destructive px-2 py-1">
              €{data.price}
            </p>
          </div>
          <p className="text-sm font-light">
            <span className="font-medium">Модель: </span>
            {data.model}
          </p>
          <p className="text-sm font-light">
            <span className="font-medium">Бренд: </span>
            {data.brand.name}
          </p>
          <p className="text-sm font-light">
            <span className="font-medium">Год выпуска: </span>
            {data.year}
          </p>
          <p className="text-sm font-light mt-2">{data.description}</p>
        </section>
      </div>
    </div>
  );
};

export default RacketPageContent;
