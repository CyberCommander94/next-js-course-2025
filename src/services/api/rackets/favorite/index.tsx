import { API_BASE_URL } from "@/constants"


export const addToFavorite = async (productId: string | number, headers?: HeadersInit) => {
  await fetch(`${API_BASE_URL}/product/${productId}/favorite`, {
    method: "POST",
    credentials: 'include',
    ...(headers ? { headers } : {})
  });
};

export const deleteFromFavorite = async (productId: string | number, headers?: HeadersInit) => {
  await fetch(`${API_BASE_URL}/product/${productId}/favorite`, {
    method: "DELETE",
    credentials: 'include',
    ...(headers ? { headers } : {})
  });
};
