import { FC } from 'react';
import { IRacket } from '@/types/shop-item';
import ProductsList from '@/components/products-list';

type RacketsPageListProps = {
  rackets: IRacket[];
};

const RacketsPageList: FC<RacketsPageListProps> = ({ rackets }) => {
  return <ProductsList products={rackets} />;
};

export default RacketsPageList;
