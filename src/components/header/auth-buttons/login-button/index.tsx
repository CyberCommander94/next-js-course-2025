"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button"
import { LogIn } from 'lucide-react';
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const LoginButton: FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/login`);
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button onClick={handleClick}>
          <LogIn strokeWidth={1} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Войти в систему</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default LoginButton;
