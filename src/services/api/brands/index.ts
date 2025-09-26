import { request } from '@/services/api/api-request'
import type { Brand } from "@/types/shop-item"

export const getBrandsList = async () => {
  const res = await request({
    endpoint: "/brands",
    method: "GET",
  });

  if (!res.ok) {
    return { isError: true, data: undefined };
  }

  const data: Brand[] = await res.json();

  return { isError: false, data };
}
