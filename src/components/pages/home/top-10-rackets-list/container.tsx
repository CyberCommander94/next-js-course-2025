import { FC } from "react";
import Top10RacketsList from "@/components/pages/home/top-10-rackets-list";
import { getTop10Rackets } from "@/services/api/rackets";

const Top10RacketsListContainer: FC = async () => {
  const { data, isError } = await getTop10Rackets();

  if (!data) {
    return null;
  }

  if (isError) {
    throw new Error("Ошибка загрузки данных");
  }

  return <Top10RacketsList rackets={data} />;
}

export default Top10RacketsListContainer;
