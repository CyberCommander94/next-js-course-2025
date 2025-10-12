import { FC } from 'react';
import HomePageRacketsList from '@/components/pages/home/home-page-rackets-list';
import { getRackets } from '@/services/api/rackets';
import { RACKETS_PAGE_ITEMS_LIMIT } from '@/constants';

const HomePageRacketsListContainer: FC = async () => {
  const { data, isError } = await getRackets({
    page: 1,
    limit: RACKETS_PAGE_ITEMS_LIMIT,
  });

  if (!data) {
    return null;
  }

  if (isError) {
    throw new Error('Ошибка загрузки данных');
  }

  return <HomePageRacketsList rackets={data} />;
};

export default HomePageRacketsListContainer;
