'use client'

import { FC, useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import { useInView } from 'react-intersection-observer';
import RacketsPageList from '@/components/pages/rackets/page/items-list';
import { API_BASE_URL } from '@/constants';
import { IRacket } from '@/types/shop-item';
import RacketsPageListLoader from './loader';

type Props = {
  currentBrand: string;
};

const PAGE_LIMIT = 12;

const fetcher = async (url: string): Promise<IRacket[]> => {
  const res = await fetch(`${API_BASE_URL}/${url}`, { credentials: 'include' });
  if (res.status === 404) return [];
  if (!res.ok) throw new Error('Ошибка загрузки данных');
  return res.json();
};

export const RacketsPageListContainer: FC<Props> = ({ currentBrand }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const getKey = (pageIndex: number, previousPageData: IRacket[] | null) => {
    if (previousPageData && previousPageData.length === 0) return null;

    const query = new URLSearchParams({
      page: String(pageIndex + 1),
      limit: String(PAGE_LIMIT),
      ...(currentBrand && currentBrand !== 'all' ? { brand: currentBrand } : {}),
    });

    return `products?${query.toString()}`;
  };

  const { data, error, setSize, isValidating } = useSWRInfinite<IRacket[]>(getKey, fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  const rackets: IRacket[] = data ? data.flat() : [];

  const hasMore = data && data[data.length - 1]?.length === PAGE_LIMIT;

  useEffect(() => {
    if (inView && !isValidating && hasMore) {
      setSize((prev) => prev + 1);
    }
  }, [inView, isValidating, hasMore, setSize]);

  if (error) {
    return <div className="text-center text-red-500 mt-8">Ошибка загрузки данных</div>;
  }

  if (!data) return <RacketsPageListLoader />;

  return (
    <div className="w-full">
      <RacketsPageList rackets={rackets} />
      <div ref={ref} className="flex justify-center">
        {isValidating ? (
          <RacketsPageListLoader />
        ) : !hasMore ? (
          <div className="text-gray-400 text-sm mt-4">Все товары загружены</div>
        ) : null}
      </div>
    </div>
  );
};
