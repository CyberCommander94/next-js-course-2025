import { FC } from "react";
import HomePageRacketsList from "@/components/pages/home/home-page-rackets-list";
import { getRackets } from "@/services/api/rackets";


const HomePageRacketsListContainer: FC = async () => {
  const { data, isError } = await getRackets({ page: 1, limit: 12});

  if (!data) {
    return null;
  }

  if (isError) {
    throw new Error("Ошибка загрузки данных");
  }

  return <HomePageRacketsList rackets={data} />;
}

export default HomePageRacketsListContainer;
