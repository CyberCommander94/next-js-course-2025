import type { IRacket } from '@/types/shop-item';
import type { IResponse } from '@/types/api';
import { API_BASE_URL } from '@/constants';

export const getMetaRacketById = async (id: string): Promise<IResponse<IRacket>> => {
  const res = await fetch(`${API_BASE_URL}/meta/product/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (res.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!res.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: IRacket } = await res.json();

  return { isError: false, data: data.product };
};
