import { FC } from "react";
import { notFound } from 'next/navigation';
import { getRacketById } from "@/services/api/rackets";
import { getMetaRacketById } from "@/services/api/meta/rackets";
import { Metadata } from "next";
import RacketPageContent from "@/components/pages/racket";

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
    <RacketPageContent data={data} />
  );
}

export default Racket;
