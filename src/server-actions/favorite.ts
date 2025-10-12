'use server';

import { REVALIDATE_RACKETS_TAG, REVALIDATE_TOP_10_TAG } from '@/constants';
import { addToFavorite, deleteFromFavorite } from '@/services/api/rackets/favorite';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

interface Params {
  isFavorite: boolean;
  productId: number;
}

export const handleFavorite = async ({ isFavorite, productId }: Params) => {
  const cookiesStore = await cookies();

  if (isFavorite) {
    await deleteFromFavorite(productId, {
      Cookie: cookiesStore.toString(),
    });
  } else {
    await addToFavorite(productId, {
      Cookie: cookiesStore.toString(),
    });
  }

  revalidateTag(REVALIDATE_TOP_10_TAG);
  revalidateTag(REVALIDATE_RACKETS_TAG);
};
