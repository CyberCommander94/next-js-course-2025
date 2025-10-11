import type { IRacket } from '@/types/shop-item';
import type { IResponse } from '@/types/api';
import { API_BASE_URL } from '@/constants';
import { cookies } from 'next/headers';

export const getTop10Rackets = async () => {
  const cookieStore = await cookies();

  const res = await fetch(`${API_BASE_URL}/top-10`, {
    method: 'GET',
    headers: {
      Cookie: cookieStore.toString(),
    },
    next: {
      tags: ['getTop10Rackets'],
    },
  });

  if (!res.ok) {
    return { isError: true, data: undefined };
  }

  const data: IRacket[] = await res.json();

  return { isError: false, data };
};

type getRacketsParams = {
  page?: number;
  limit?: number;
  brand?: string;
};

export const getRackets = async ({
  page = 1,
  limit = 2,
  brand,
}: getRacketsParams): Promise<IResponse<IRacket[]>> => {
  const cookieStore = await cookies();

  const query = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    ...(brand ? { brand } : {}),
  });

  const res = await fetch(`${API_BASE_URL}/products?${query.toString()}`, {
    method: 'GET',
    headers: {
      Cookie: cookieStore.toString(),
    },
    next: {
      tags: ['getRackets'],
    },
  });

  if (!res.ok) {
    return { isError: true, data: undefined };
  }

  const data: IRacket[] = await res.json();

  return { isError: false, data };
};

export const getRacketById = async (
  id: string,
  credentials?: RequestCredentials,
): Promise<IResponse<IRacket>> => {
  const cookieStore = await cookies();

  const res = await fetch(`${API_BASE_URL}/product/${id}`, {
    method: 'GET',
    headers: {
      Cookie: cookieStore.toString(),
    },
    ...(credentials ? { credentials } : {}),
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

export const getRacketOgDataById = async ({
  id,
}: { id: string }): Promise<IResponse<IRacket>> => {
  const result = await fetch(`${API_BASE_URL}/product/${id}`, {
    cache: "force-cache",
  });

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: IRacket } = await result.json();

  return { isError: false, data: data.product };
};
