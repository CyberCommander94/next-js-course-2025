import { FC, Suspense } from 'react';
import Top10PageListLoader from '@/components/pages/rackets/top-10/loader';
import Top10PageListContainer from '@/components/pages/rackets/top-10/container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tennis shop: Топ 10',
  description: 'Топ 10 ракеток магазина Tennis shop',
};

const Top10Rackets: FC = async () => {
  return (
    <div className="w-full flex justify-center h-full">
      <div className="flex flex-col items-center w-full h-full lg:w-9/12 py-4 px-6 lg:px-0">
        <section className="flex justify-between items-center w-full my-2 font-light">
          <h2 className="font-light text-xl md:text-2xl">Топ 10 ракеток</h2>
        </section>
        <Suspense fallback={<Top10PageListLoader />}>
          <Top10PageListContainer />
        </Suspense>
      </div>
    </div>
  );
};

export default Top10Rackets;
