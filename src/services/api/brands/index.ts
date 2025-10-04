import type { Brand } from "@/types/shop-item"
import { API_BASE_URL } from "@/constants"

export const getBrandsList = async () => {
  const res = await fetch(`${API_BASE_URL}/brands`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });

  if (!res.ok) {
    return { isError: true, data: undefined };
  }

  const data: Brand[] = await res.json();

  return { isError: false, data };
}
