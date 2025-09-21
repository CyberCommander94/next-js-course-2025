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
      <div className="flex flex-col items-center w-full h-full lg:w-9/12 py-5 px-6 lg:px-0">
        <section className="flex justify-between items-center w-full">
          <h2 className="font-light">Ракетки</h2>
          <Link href="/rackets" className="font-light flex gap-1 items-center hover:text-muted-foreground">
            <span>См. Все</span>
            <ArrowRight strokeWidth={1} />
          </Link>
        </section>
        <section className="flex items-center h-full lg:max-w-[1500px] w-full px-15">
          <Carousel className="w-full">
            <CarouselContent className="p-5 box-border -ml-6">
              {featured.map((item) => (
                <CarouselItem key={item.id} className="pl-6 basis-full sm:basis-1/2 xl:basis-1/3 2xl:basis-1/4">
                  <Link href={`/racket/${item.id}`} className="block bg-white h-full border border-foreground transform transition-transform duration-300 hover:scale-102 overflow-hidden">
                    <ItemCard item={item} />
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </div>
    </div>
  );
}

export default Home;
