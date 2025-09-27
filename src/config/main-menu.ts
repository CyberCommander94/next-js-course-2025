import type { IMenuItem } from "@/types/main-menu";

const MenuItemsData: IMenuItem[] = [
  {
    id: 'home',
    title: "Главная",
    href: "/",
  },
  {
    id: 'rackets',
    title: "Ракетки",
    href: "/rackets",
  },
  {
    id: 'top10',
    title: "Топ 10",
    href: "/top-10",
  },
]

export default MenuItemsData;
