import { FC } from "react";
import { IRacket } from "@/types/shop-item";
import ProductsList from "@/components/products-list"

type HomePageRacketsListProps = {
  rackets: IRacket[];
}

const HomePageRacketsList: FC<HomePageRacketsListProps> = ({ rackets }) => {
  return (
    <ProductsList products={rackets} />
  );
}

export default HomePageRacketsList;
