import { FC } from "react";
import ThemeProvider from "@/providers/theme";
import ThemeSwitcher from "@/components/header/theme-switcher";
import MainNav from "@/components/header/main-nav";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react"
import Link from "next/link";
import type { Theme } from "@/types/theme";


type AppHeaderProps = {
  initialTheme: Theme;
};

const AppHeader: FC<AppHeaderProps> = ({ initialTheme }) => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center bg-background">
        <div className="flex justify-between flex-row w-full gap-2 lg:w-9/12 py-3 px-6 lg:px-0">
          <div className="text-2xl md:text-3-xl font-light uppercase tracking-tighter bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 text-transparent bg-clip-text">
            <Link href="/">
              Tennis Store
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <ThemeProvider initialTheme={initialTheme}>
              <ThemeSwitcher />
            </ThemeProvider>
            <Button variant="destructive">
              <ShoppingCart strokeWidth={1} />
              <span>€0</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-foreground">
        <div className="w-full lg:w-9/12 py-3 px-6 lg:px-0">
          <MainNav />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
