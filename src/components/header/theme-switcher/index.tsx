'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/providers/theme';
import { FC } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button onClick={toggleTheme}>
          {theme === 'light' ? <Moon strokeWidth={1} /> : <Sun strokeWidth={1} />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{`Включить ${theme === 'light' ? 'темную' : 'светлую'} тему`}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ThemeSwitcher;
