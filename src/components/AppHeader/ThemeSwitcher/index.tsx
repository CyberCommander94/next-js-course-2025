"use client";

import { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import { FC } from "react";
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? <Moon strokeWidth={1} /> : <Sun strokeWidth={1} />}
    </Button>
  );
}

export default ThemeSwitcher;
