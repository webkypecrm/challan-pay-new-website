// src/lib/api.ts
import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const TOKEN = process.env.NEXT_PUBLIC_LAWYERED_PARTNER_TOKEN;

// Generic Axios instance (non-token)
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Helper to include token in headers
const getHeaders = (token?: string) => ({
  "Content-Type": "application/json",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
});

/**
 * GET request (can include token)
 */
export const getRequest = async <T>(
  url: string,
  params?: Record<string, unknown>
): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(url, {
      headers: getHeaders(TOKEN),
      params,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "GET request error:",
        error.response?.data || error.message
      );
    } else {
      console.error("GET request unknown error:", String(error));
    }
    throw error;
  }
};

/**
 * POST request (can include token)
 */
export const postRequest = async <T>(
  url: string,
  data?: Record<string, unknown>,

  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await axiosInstance.post<T>(url, data, {
      headers: getHeaders(TOKEN),
      ...config,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "POST request error:",
        error.response?.data || error.message
      );
    } else {
      console.error("POST request unknown error:", String(error));
    }
    throw error;
  }
};

export const getHeadersWithoutToken = (tokenRequired = false) => {
  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("userToken") : null;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (tokenRequired && token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};

export const getRequestWithoutToken = async <T>(
  url: string,
  params?: Record<string, unknown>,
  tokenRequired = false
): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(url, {
      params,
      headers: getHeadersWithoutToken(tokenRequired),
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "GET request error:",
        error.response?.data || error.message
      );
    } else {
      console.error("GET request unknown error:", String(error));
    }
    throw error;
  }
};

/**
 * POST request (optionally with token)
 *
 *
 */

export const postRequestWithoutToken = async <T>(
  url: string,
  data?: Record<string, unknown> | FormData,
  tokenRequired = false
): Promise<T> => {
  try {
    const response = await axiosInstance.post<T>(url, data, {
      headers: {
        ...getHeadersWithoutToken(tokenRequired),
        ...(data instanceof FormData
          ? { "Content-Type": "multipart/form-data" }
          : {}),
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "POST request error:",
        error.response?.data || error.message
      );
    } else {
      console.error("POST request unknown error:", String(error));
    }
    throw error;
  }
};
