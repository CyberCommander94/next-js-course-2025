import { FC } from "react";
import { IRacket } from "@/types/shop-item";
import ProductsList from "@/components/products-list"

type Top10PageListProps = {
  rackets: IRacket[];
}

const Top10PageList: FC<Top10PageListProps> = ({ rackets }) => {
  return (
    <ProductsList products={rackets} />
  );
}

export default Top10PageList;
