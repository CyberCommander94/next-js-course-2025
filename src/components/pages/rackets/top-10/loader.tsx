import { FC } from "react";
import ProductsListLoader from "@/components/loaders/products-list-loader"

const Top10PageListLoader: FC = () => {
  return (
    <ProductsListLoader amount={12} />
  );
}

export default Top10PageListLoader;
