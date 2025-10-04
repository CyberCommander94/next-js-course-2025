"use client";

import { FC, useTransition } from "react";
import { Button } from "@/components/ui/button"
import { LogOut } from 'lucide-react';
import { userLogout } from "@/services/api/auth"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const LogoutButton: FC = () => {
  const [isPending, startTransition] = useTransition();

  const handleLogout = async () => {
    await userLogout();
    
    location.assign("/")
  }

  return (
    <Dialog>
      <Tooltip>
        <DialogTrigger asChild>
          <TooltipTrigger asChild>
            <Button>
              <LogOut strokeWidth={1} />
            </Button>
          </TooltipTrigger>
        </DialogTrigger>
        <TooltipContent>
          <p>Выйти с системы</p>
        </TooltipContent>
      </Tooltip>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-light">Вы действительно хотите выйти с системы?</DialogTitle>
        </DialogHeader>
        <DialogFooter className="mt-2">
          <Button variant="destructive" disabled={isPending} onClick={() => startTransition(handleLogout)}>Выйти с системы</Button>
          <DialogClose asChild>
            <Button disabled={isPending}>Отменить</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default LogoutButton;
