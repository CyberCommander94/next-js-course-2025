import { FC } from "react";
import { Input } from "@/components/ui/input"

const HeaderSearch: FC = () => {
  return (
    <Input type="text" placeholder="Поиск" className="w-full"/>
  );
}

export default HeaderSearch;
