"use client"

import { FC, useMemo, useCallback } from "react";
import type { MenuItem } from "@/types/main-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import MenuItemsData from "@/config/main-menu"

const MainNav: FC = () => {
  const pathname = usePathname();

  const renderMenuItems = useCallback((menuItems: MenuItem[]) => {
    return menuItems.map((item) => {
      const isActive = pathname === item.href;

      if (item.children && item.children.length > 0) {
        return (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuTrigger className={`${isActive ? 'bg-background text-foreground' : 'text-background'}`}>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent className="list-none">
              <div className="flex flex-col space-y-1 p-2">
                {renderMenuItems(item.children)}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )
      }

      return (
        <NavigationMenuItem key={item.id}>
          <NavigationMenuLink asChild>
            <Link href={item.href} className={`${isActive ? 'bg-background font-light text-foreground' : 'font-light text-background'}`}>{item.title}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      )
    })
  }, [pathname]);

  const menuTree = useMemo(() => renderMenuItems(MenuItemsData), [renderMenuItems]);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuTree}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MainNav;
