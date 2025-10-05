"use client"

import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "@/components/product-card";
import { IRacket } from "@/types/shop-item";
import Link from "next/link";

type Top10racketsListProps = {
  rackets: IRacket[];
}

const Top10RacketsList: FC<Top10racketsListProps> = ({ rackets }) => {
  return (
    <section className="flex flex-col items-center w-full h-full">
      <div className="flex justify-end items-center w-full">
        <Link href="/rackets/top-10" className="px-2 py-2 bg-transparent border border-foreground dark:border text-center hover:text-white hover:bg-foreground dark:text-white dark:border-input dark:hover:bg-input/50">
          <span className="text-sm font-light">См. Все</span>
        </Link>
      </div>
      <div className="lg:max-w-[1500px] flex items-center w-full h-full px-15">
        <Carousel className="w-full">
          <CarouselContent className="p-5 pr-1 box-border mr-1">
            {rackets.map((item) => (
              <CarouselItem key={item.id} className=" max-w-[300px] sm:basis-1/2 md:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex-shrink-0">
                <ProductCard product={item} url={`/racket/${item.id}`} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="cursor-pointer" />
          <CarouselNext className="cursor-pointer"/>
        </Carousel>
      </div>
    </section>
  );
}

export default Top10RacketsList;
