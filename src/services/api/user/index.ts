import { API_BASE_URL } from '@/constants'
import { IResponse } from "@/types/api";
import { IUser } from "@/types/user";
import { cookies } from "next/headers";

export const getUser = async (): Promise<IResponse<IUser>> => {
  const cookieStore = await cookies();

  const result = await fetch(`${API_BASE_URL}/auth/user`, {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: cookieStore.toString(),
    },
  })

  if (result.status === 401) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { user: IUser } = await result.json();

  return { isError: false, data: data.user };
};
