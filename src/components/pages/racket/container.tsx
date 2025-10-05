"use client";

import RacketPageContent from "@/components/pages/racket";
import { IRacket } from "@/types/shop-item";
import { notFound } from "next/navigation";
import { FC } from "react";
import useSWR from "swr";
import { API_BASE_URL } from "@/constants";

interface Props {
  productId: string;
}

const fetcher = async (path: string): Promise<IRacket> => {
  const result = await fetch(`${API_BASE_URL}/${path}`, {
    credentials: "include",
  });

  if (result.status === 404) {
    return Promise.resolve(undefined as unknown as IRacket);
  }

  if (!result.ok) {
    throw new Error("Ошибка загрузки данных");
  }

  const data: { product: IRacket } = await result.json();
  return data.product;
};

export const RacketContainer: FC<Props> = ({ productId }) => {
  const { data, error } = useSWR<IRacket>(
    `product/${productId}`,
    fetcher,
    { revalidateOnFocus: false, revalidateIfStale: false }
  );

  if (error) {
    throw new Error("Ошибка загрузки данных");
  }

  if (!data) {
    return notFound();
  }

  return <RacketPageContent data={data} />;
};
