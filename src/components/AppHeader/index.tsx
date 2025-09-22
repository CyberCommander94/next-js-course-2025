import { FC } from "react";
import ThemeProvider from "@/providers/ThemeProvider";
import ThemeSwitcher from "@/components/AppHeader/ThemeSwitcher";
import MainNav from "@/components/AppHeader/MainNav";
import HeaderSearch from "@/components/AppHeader/HeaderSearch";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react"


const AppHeader: FC = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center bg-background">
        <div className="flex justify-between w-full gap-2 lg:w-9/12 py-3 px-6 lg:px-0">
          <div className="text-4xl font-light uppercase tracking-tighter bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 text-transparent bg-clip-text">
            Tennis Store
          </div>
          <div className="w-2/5 flex items-center">
            <HeaderSearch />
          </div>
          <div className="flex items-center gap-2">
            <ThemeProvider>
              <ThemeSwitcher />
            </ThemeProvider>
            <Button className="bg-destructive hover:bg-destructive-light cursor-pointer font-light text-white">
              <ShoppingCart />
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
