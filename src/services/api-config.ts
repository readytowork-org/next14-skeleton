import { AxiosResponse } from "axios";
import { ApiError } from "next/dist/server/api-utils";
import { HttpClient } from "@/src/services/http-client";

const _httpClient = new HttpClient({
  format: "json",
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  },
});

_httpClient.instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    const data = error.response?.data || undefined;
    return data
      ? Promise.reject<ApiError>(data)
      : Promise.reject<AxiosResponse>(error.response);
  },
);

_httpClient.instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const data = error.response?.data || undefined;
    return data
      ? Promise.reject<ApiError>({
          ...data,
          statusCode: error.response?.status,
        })
      : Promise.reject<AxiosResponse>(error.response);
  },
);

export { _httpClient };
