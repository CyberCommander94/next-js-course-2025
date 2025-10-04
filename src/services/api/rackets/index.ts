import type { IRacket } from '@/types/shop-item';
import type { IResponse } from '@/types/api';
import { API_BASE_URL } from "@/constants"

export const getTop10Rackets = async () => {
  const res = await fetch(`${API_BASE_URL}/top-10`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
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
  const query = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    ...(brand ? { brand } : {})
  });

  const res = await fetch(`${API_BASE_URL}/products?${query.toString()}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    return { isError: true, data: undefined };
  }

  const data: IRacket[] = await res.json();

  return { isError: false, data };
};

export const getRacketById = async (id: string): Promise<IResponse<IRacket>> => {
  const res = await fetch(`${API_BASE_URL}/product/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
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
