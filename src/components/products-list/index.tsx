import { FC } from 'react';
import type { IRacket } from '@/types/shop-item';
import ProductCard from '@/components/product-card';

type ProductsListProps = {
  products: IRacket[];
};

const ItemsList: FC<ProductsListProps> = ({ products }) => {
  return (
    <section className="flex items-center w-full py-2 box-border">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 w-full">
        {products.map((item: IRacket) => (
          <ProductCard key={item.id} product={item} url={`/racket/${item.id}`} />
        ))}
      </div>
    </section>
  );
};

export default ItemsList;
