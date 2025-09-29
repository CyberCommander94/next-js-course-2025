import { FC } from "react";
import { notFound } from 'next/navigation';
import { getRacketById } from "@/services/api/rackets";
import { getMetaRacketById } from "@/services/api/meta/rackets";
import { Metadata } from "next";

interface RacketPageProps {
  params: Promise<{ id: string }>
}

export const generateMetadata = async ({
  params,
}: RacketPageProps): Promise<Metadata> => {
  const { id } = await params;

  const { data } = await getMetaRacketById(id);

  if (!data) {
    return {
      title: "Tennis Shop: Racket Page",
    };
  }

  return {
    title: `Tennis Shop: ${data.name}`,
    description: data.description,
  };
};

const Racket: FC<RacketPageProps> = async ({ params }) => {
  const { id } = await params;

  const { data: metaData } = await getMetaRacketById(id);

  if (!id || !metaData) return notFound();

  const { data, isError } = await getRacketById(id);

  if (!data && !isError) return notFound();

  if (isError) {
    throw new Error("Ошибка загрузки данных");
  }

  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full h-full lg:w-9/12 px-6 lg:px-0 py-4 md:py-10">
        <section className="w-full flex justify-center items-start">
          <img src={data?.imageUrl} alt={data?.name} className="max-w-[400px] max-h-[400px] w-full h-auto object-contain" />
        </section>
        <section className="flex flex-col h-full w-full gap-2">
          <div className="flex justify-between items-center w-full gap-3">
            <p className="text-2xl font-medium">{data?.name}</p>
            <p className="text-2xl border border-destructive bg-transparent text-destructive px-2 py-1">€{data?.price}</p>
          </div>
          <p className="text-sm font-light"><span className="font-medium">Модель: </span>{data?.model}</p>
          <p className="text-sm font-light"><span className="font-medium">Бренд: </span>{data?.brand.name}</p>
          <p className="text-sm font-light"><span className="font-medium">Год выпуска: </span>{data?.year}</p>
          <p className="text-sm font-light mt-2">{data?.description}</p>
        </section>
      </div>
    </div>
  );
}

export default Racket;
