const API_BASE_URL = "http://localhost:4000/api";

type HttpMethod = "GET" | "POST";

interface RequestOptions<TBody = unknown> {
  endpoint: string;
  method: HttpMethod;
  params?: Record<string, string | number | boolean>;
  body?: TBody;
  headers?: Record<string, string>;
  next?: NextFetchRequestConfig;
}

export async function request<TBody = unknown>(
  options: RequestOptions<TBody>
): Promise<Response> {
  const { endpoint, method = "GET", params, body, headers = {} } = options;
  let url = `${API_BASE_URL}${endpoint}`;

  if (params && method === "GET") {
    const query = new URLSearchParams(
      Object.entries(params).map(([key, value]) => [key, String(value)])
    ).toString();
    url += `?${query}`;
  }

  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const mergedHeaders = new Headers(defaultHeaders);

  Object.entries(headers).forEach(([key, value]) => {
    mergedHeaders.set(key, value);
  });

  return fetch(url, {
    method,
    headers: mergedHeaders,
    body: method !== "GET" && body ? JSON.stringify(body) : undefined,
  });
}
