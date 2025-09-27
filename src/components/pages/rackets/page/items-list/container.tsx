import { FC } from "react";
import RacketsPageList from "@/components/pages/rackets/page/items-list";
import { getRackets } from "@/services/api/rackets";

type Props = {
  currentBrand: string;
}

const RacketsPageListContainer: FC<Props> = async ({ currentBrand }) => {
  const requestParams = {
    page: 1,
    limit: 20,
    ...(currentBrand && currentBrand !== 'all' ? { brand: currentBrand } : {}),
  }

  const { data, isError } = await getRackets(requestParams);

  if (isError) {
    throw new Error("Ошибка загрузки данных");
  }

  if (!data) {
    return null
  }

  return <RacketsPageList rackets={data} />;
}

export default RacketsPageListContainer;
