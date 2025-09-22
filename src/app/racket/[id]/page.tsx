import { FC } from "react";
import { notFound } from 'next/navigation';
import { getItemById } from "@/db/data";
import { getFeaturedItems } from "@/db/data";

interface RacketPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const topRackets = getFeaturedItems();;

  return topRackets.map((racket) => ({
    id: String(racket.id),
  }))
}

const Racket: FC<RacketPageProps> = async ({ params }) => {
  const { id } = await params;

  if (!id) return notFound();

  const itemData = getItemById(id);
  if (!itemData) return notFound();

  return (
    <div className="w-full flex justify-center items-center h-full">
      <div className="grid [grid-template-columns:50%_1fr] lg:[grid-template-columns:35%_1fr] gap-4 lg:gap-12 w-full h-full lg:w-9/12 py-5 px-6 lg:px-0">
        <section className="h-full w-full pt-10">
          <img src={itemData.imageUrl} alt={itemData.name} className="w-full h-auto object-contain" />
        </section>
        <section className="flex flex-col h-full w-full gap-5 md:gap-5 pt-10">
          <div className="flex justify-between items-center w-full gap-3">
            <div className="flex flex-col">
              <p className="text-muted-foreground font-light">{itemData.model}</p>
              <p className="text-3xl font-bold">{itemData.name}</p>
            </div>
            <p className="text-3xl font-light bg-destructive rounded-sm text-white px-2 py-1">€{itemData.price}</p>
          </div>
          <p className="font-light">{itemData.description}</p>
        </section>
      </div>
    </div>
  );
}

export default Racket;
