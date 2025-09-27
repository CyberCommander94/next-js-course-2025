import { FC } from "react";
import { IRacket } from "@/types/shop-item";
import ProductsList from "@/components/products-list"
import Link from "next/link";

type HomePageRacketsListProps = {
  rackets: IRacket[];
}

const HomePageRacketsList: FC<HomePageRacketsListProps> = ({ rackets }) => {
  return (
    <section className="flex flex-col items-center w-full h-full">
      <div className="flex justify-end items-center w-full mb-2">
        <Link href="/rackets" className="px-2 py-2 bg-transparent border border-foreground dark:border text-center hover:text-white hover:bg-foreground dark:text-white dark:border-input dark:hover:bg-input/50">
          <span className="text-sm font-light">См. Все</span>
        </Link>
      </div>
      <ProductsList products={rackets} />
    </section>
  );
}

export default HomePageRacketsList;
