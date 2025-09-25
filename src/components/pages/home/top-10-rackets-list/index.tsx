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

type Top10racketsListProps = {
  rackets: IRacket[];
}

const Top10RacketsList: FC<Top10racketsListProps> = ({ rackets }) => {
  return (
    <section className="lg:max-w-[1500px] flex items-center w-full h-full px-15">
      <Carousel className="w-full">
        <CarouselContent className="p-5 pr-1 box-border -ml-5 mr-1">
          {rackets.map((item) => (
            <CarouselItem key={item.id} className="pl-6 basis-full max-w-[300px] sm:basis-1/2 xl:basis-1/3 2xl:basis-1/4">
              <ProductCard product={item} url={`/racket/${item.id}`} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="cursor-pointer"/>
      </Carousel>
    </section>
  );
}

export default Top10RacketsList;
