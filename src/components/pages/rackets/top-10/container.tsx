import { FC } from 'react';
import Top10PageList from '@/components/pages/rackets/top-10';
import { getTop10Rackets } from '@/services/api/rackets';

const Top10PageListContainer: FC = async () => {
  const { data, isError } = await getTop10Rackets();

  if (isError) {
    throw new Error('Ошибка загрузки данных');
  }

  if (!data) {
    return null;
  }

  return <Top10PageList rackets={data} />;
};

export default Top10PageListContainer;
