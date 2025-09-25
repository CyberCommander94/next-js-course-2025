import { FC } from "react";
import RacketsPageList from "@/components/pages/rackets/";
import { getRackets } from "@/services/api/rackets";
import { notFound } from 'next/navigation';

const RacketsPageListContainer: FC = async () => {
  const { data, isError } = await getRackets({page: 1, limit: 20});

  if (isError) {
    throw new Error("Ошибка загрузки данных");
  }

  if (!data) {
    return notFound();
  }

  return <RacketsPageList rackets={data} />;
}

export default RacketsPageListContainer;
