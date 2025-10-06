"use server";

import { userLogin } from "@/services/api/auth";
import { parseSetCookie } from "@/utils/parse-set-cookie";
import { LoginState } from "@/types/auth";
import { cookies } from "next/headers";

export const loginAction = async (_: LoginState, formData: FormData) => {
  const login = formData.get("login")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  const result = await userLogin({ login, password });

  if (result.status !== 200) {
    return { error: "Invalid login or password" };
  }

  const cookiesStore = await cookies();
  const setCookieHeader = result.headers.getSetCookie();

  if (setCookieHeader) {
    const parsed = parseSetCookie(setCookieHeader);
    for (const cookie of parsed) {
      cookiesStore.set(cookie.name, cookie.value, cookie.options);
    }
  }

  return { error: "", redirectTo: "/" };
};
