import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ArrowRight } from "lucide-react"
import Link from "next/link";
import { getFeaturedItems } from "@/db/data";
import ItemCard from "@/components/ItemCard";

const Home: FC = () => {
  const featured = getFeaturedItems();

  return (
    <div className="w-full flex justify-center items-center h-full">
      <div className="flex flex-col items-center w-full h-full lg:w-9/12 py-5 px-6 lg:px-0 gap-4">
        <section className="flex justify-between items-center w-full">
          <h2 className="font-light text-xl md:text-2xl">Топ 10 ракеток нашего магазина</h2>
          <Link href="/rackets" className="font-light flex gap-1 items-center hover:text-muted-foreground">
            <span className="text-sm md:text-base">См. Все</span>
            <ArrowRight strokeWidth={2} size={16} />
          </Link>
        </section>
        <section className="lg:max-w-[1500px] flex items-center w-full h-full px-15">
          <Carousel className="w-full">
            <CarouselContent className="p-5 pr-1 box-border -ml-5 mr-1">
              {featured.map((item) => (
                <CarouselItem key={item.id} className="pl-6 basis-full max-w-[300px] sm:basis-1/2 xl:basis-1/3 2xl:basis-1/4">
                  <ItemCard item={item} url={`/racket/${item.id}`} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="cursor-pointer" />
            <CarouselNext className="cursor-pointer"/>
          </Carousel>
        </section>
      </div>
    </div>
  );
}

export default Home;
