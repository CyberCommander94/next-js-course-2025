'use client';

import { FC } from 'react';
import { LogIn } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';

const LoginButton: FC = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href="/login" className="h-9 px-4 py-2 has-[>svg]:px-3 dark:bg-transparent dark:hover:bg-input hover:bg-foreground border-foreground dark:border-input text-foreground hover:text-white dark:text-white bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:outline-none border font-light focus-visible:ring-0 inline-flex cursor-pointer rounded-none items-center justify-center gap-2 whitespace-nowrap text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none">
          <LogIn strokeWidth={1} />
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>Войти в систему</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default LoginButton;
