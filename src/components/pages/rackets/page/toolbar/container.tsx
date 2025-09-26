import { FC } from "react";
import RacketsPageToolbar from "@/components/pages/rackets/page/toolbar";
import { getBrandsList } from "@/services/api/brands";

type Props = {
  currentBrand: string;
}

const RacketsPageToolbarContainer: FC<Props> = async ({ currentBrand }) => {
  const { data, isError } = await getBrandsList();

  if (isError) {
    throw new Error("Ошибка загрузки данных");
  }

  if (!data) {
    return null;
  }

  return <RacketsPageToolbar brands={data} currentBrand={currentBrand} />;
}

export default RacketsPageToolbarContainer;
