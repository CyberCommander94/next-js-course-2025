import { IRacket } from "@/types/shop-item";
import { use, useEffect } from "react";
import { FavoriteContext } from ".";

export const useSetIsFavorite = () => {
  const { setFavorite } = use(FavoriteContext);

  return setFavorite;
};

export const useHydrateFavorite = ({
  racketId,
  isFavorite,
}: {
  racketId: IRacket["id"];
  isFavorite?: boolean;
}) => {
  const setIsFavorite = useSetIsFavorite();

  useEffect(() => {
    if (typeof isFavorite === "boolean") {
      setIsFavorite({
        isFavorite: isFavorite,
        id: racketId,
      });
    }
  }, [racketId, isFavorite, setIsFavorite]);
};

export const useIsFavoriteById = ({
  id,
  isFavoriteInitial,
}: {
  id: IRacket["id"];
  isFavoriteInitial?: boolean;
}): boolean => {
  const { favorites } = use(FavoriteContext);
  const isFavoriteGlobal = favorites[id] ?? null;
  const isFavorite = isFavoriteGlobal ?? isFavoriteInitial;

  return Boolean(isFavorite);
};
