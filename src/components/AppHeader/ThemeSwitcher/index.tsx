"use client";

import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import { FC } from "react";
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button className="cursor-pointer" onClick={toggleTheme}>
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
}

export default ThemeSwitcher;
