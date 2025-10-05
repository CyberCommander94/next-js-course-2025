'use client';

import { FC, useMemo, useCallback } from 'react';
import type { IMenuItem } from '@/types/main-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import MenuItemsData from '@/config/main-menu';

const MainNav: FC = () => {
  const pathname = usePathname();

  const renderMenuItems = useCallback(
    (menuItems: IMenuItem[]) => {
      return menuItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuLink asChild active={isActive}>
              <Link href={item.href}>{item.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        );
      });
    },
    [pathname],
  );

  const menuTree = useMemo(() => renderMenuItems(MenuItemsData), [renderMenuItems]);

  return (
    <NavigationMenu>
      <NavigationMenuList>{menuTree}</NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNav;
