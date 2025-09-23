import { FC } from "react";
import { notFound } from 'next/navigation';
import { getItemById } from "@/db/data";
import { getFeaturedItems } from "@/db/data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

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
    <div className="w-full flex items-center flex-col h-full">
      <div className="w-full lg:w-9/12 py-3 px-6 lg:px-0">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Главная</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/rackets">Ракетки</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{itemData.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full h-full lg:w-9/12 px-6 lg:px-0 py-5 md:py-10">
        <section className="w-full flex justify-center items-start">
          <img src={itemData.imageUrl} alt={itemData.name} className="max-w-[400px] max-h-[400px] w-full h-auto object-contain" />
        </section>
        <section className="flex flex-col h-full w-full gap-2">
          <div className="flex justify-between items-center w-full gap-3">
            <p className="text-2xl font-medium">{itemData.name}</p>
            <p className="text-2xl border border-destructive bg-transparent text-destructive px-2 py-1">€{itemData.price}</p>
          </div>
          <p className="text-sm font-light"><span className="font-medium">Модель: </span>{itemData.model}</p>
          <p className="text-sm font-light"><span className="font-medium">Бренд: </span>{itemData.brand.name}</p>
          <p className="text-sm font-light"><span className="font-medium">Год выпуска: </span>{itemData.year}</p>
          <p className="text-sm font-light mt-2">{itemData.description}</p>
        </section>
      </div>
    </div>
  );
}

export default Racket;
