
import { FC } from "react";
import { getRacketById } from "@/services/api/rackets";
import { getMetaRacketById } from "@/services/api/meta/rackets";
import { Metadata } from "next";
import { RacketContainer } from "@/components/pages/racket/container";
import { SWRConfig } from "swr";

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

  const { data } = await getRacketById(id, "include");

  return (
    <SWRConfig
      value={{
        fallback: {
          [`product/${id}`]: data,
        },
        revalidateOnFocus: false,
      }}
    >
      <RacketContainer productId={id} />
    </SWRConfig>
  );
}

export default Racket;
