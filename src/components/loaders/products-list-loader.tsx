import { FC } from 'react';
import ProductCardSkeleton from '@/components/loaders/product-card-skeleton';

type ProductsListLoaderProps = {
  amount: number;
};

const ProductsListLoader: FC<ProductsListLoaderProps> = ({ amount }) => {
  return (
    <section className="flex items-center w-full py-2 box-border">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 w-full">
        {Array.from({ length: amount }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};

export default ProductsListLoader;
