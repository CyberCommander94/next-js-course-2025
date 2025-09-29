import { request } from '@/services/api/api-request'
import type { IRacket } from '@/types/shop-item';
import type { IResponse } from '@/types/api';

export const getMetaRacketById = async (id: string): Promise<IResponse<IRacket>> => {
  const res = await request({
    endpoint: `/meta/product/${id}`,
    method: "GET",
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
