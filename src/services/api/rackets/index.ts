import { request } from '@/services/api/api-request'
import type { IRacket } from '@/types/shop-item';
import type { IResponse } from '@/types/api';

export const getTop10Rackets = async () => {
  const res = await request({
    endpoint: "/top-10",
    method: "GET",
    next: {
      revalidate: 15,
      tags: ["getTop10Rackets"],
    }
  });

  if (!res.ok) {
    return { isError: true, data: undefined };
  }

  const data: IRacket[] = await res.json();

  return { isError: false, data };
}

type getRacketsParams = {
  page?: number;
  limit?: number;
  brand?: string;
}

export const getRackets = async ({
  page = 1,
  limit = 2,
  brand
}: getRacketsParams): Promise<IResponse<IRacket[]>> => {
  const res = await request({
    endpoint: "/products",
    method: "GET",
    params: {
      page,
      limit,
      ...(brand ? { brand } : {}),
    }
  });

  if (!res.ok) {
    return { isError: true, data: undefined };
  }

  const data: IRacket[] = await res.json();

  return { isError: false, data };
};

export const getRacketById = async (id: string): Promise<IResponse<IRacket>> => {
    const res = await request({
    endpoint: `/product/${id}`,
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
