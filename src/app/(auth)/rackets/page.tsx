import { FC, Suspense } from 'react';
import { RacketsPageListContainer } from '@/components/pages/rackets/page/items-list/container';
import RacketsPageToolbarLoader from '@/components/pages/rackets/page/toolbar/loader';
import RacketsPageToolbarContainer from '@/components/pages/rackets/page/toolbar/container';
import { Metadata } from 'next';
import { SWRConfig } from 'swr';
import { getRackets } from "@/services/api/rackets";
import { RACKETS_PAGE_ITEMS_LIMIT } from '@/constants';

type Props = {
  searchParams: SearchParams;
};

const PAGE_NUMBER = 1;

export const metadata: Metadata = {
  title: 'Tennis shop: Ракетки',
  description: 'Список всех ракеток магазина Tennis shop',
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const Rackets: FC<Props> = async ({ searchParams }) => {
  const params = await searchParams;

  const brand = Array.isArray(params) ? params[0] : (params.brand ?? 'all');

  const requestParams = {
    PAGE_NUMBER,
    RACKETS_PAGE_ITEMS_LIMIT,
    ...(brand && brand !== 'all' ? { brand } : {}),
  };

  const { data } = await getRackets(requestParams);

  const firstPageQuery = new URLSearchParams({
    page: String(PAGE_NUMBER),
    limit: String(RACKETS_PAGE_ITEMS_LIMIT),
    ...(brand && brand !== 'all' ? { brand } : {}),
  });

  return (
    <div className="w-full flex justify-center h-full">
      <div className="flex flex-col items-center w-full h-full lg:w-9/12 py-4 px-6 lg:px-0">
        <section className="flex justify-between items-center w-full my-2 font-light">
          <h2 className="font-light text-xl md:text-2xl">Все ракетки</h2>
        </section>
        <Suspense fallback={<RacketsPageToolbarLoader />}>
          <RacketsPageToolbarContainer currentBrand={brand} />
        </Suspense>
        <SWRConfig
          value={{
            fallback: {
              [`products?${firstPageQuery.toString()}`]: [data],
            },
            revalidateOnFocus: false,
          }}
        >
          <RacketsPageListContainer currentBrand={brand} />
        </SWRConfig>
      </div>
    </div>
  );
};

export default Rackets;
