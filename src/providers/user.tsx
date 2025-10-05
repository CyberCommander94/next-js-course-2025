"use client";

import { IUser } from "@/types/user";
import { createContext, FC, PropsWithChildren } from "react";

interface UserContextType {
  isAuthorized: IUser | undefined;
}
export const UserContext = createContext<UserContextType>({ isAuthorized: undefined });

interface Props extends PropsWithChildren {
  isAuthorized: IUser | undefined;
}

export const UserProvider: FC<Props> = ({ isAuthorized, children }) => {
  return <UserContext value={{ isAuthorized }}>{children}</UserContext>;
};
