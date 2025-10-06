import { API_BASE_URL } from "@/constants"

export const userLogin = async (bodyData: unknown) => {
  return await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: { "Content-Type": "application/json" }
  });
}

export const userSignup = async (bodyData: unknown) => {
  return await fetch(`${API_BASE_URL}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: { "Content-Type": "application/json" }
  });
}

export const userLogout = async () => {
  await fetch(`${API_BASE_URL}/auth/logout`, {
    method: "DELETE",
    credentials: "include",
  });
}
