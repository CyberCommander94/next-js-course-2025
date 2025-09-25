import { FC } from "react";
import ProductsListLoader from "@/components/loaders/products-list-loader"

const HomePageRacketsListLoader: FC = () => {
  return (
    <ProductsListLoader amount={12} />
  );
}

export default HomePageRacketsListLoader;
