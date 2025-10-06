// src/lib/api.ts
import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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
  token?: string,
  params?: Record<string, any>
): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(url, {
      headers: getHeaders(token),
      params,
    });
    return response.data;
  } catch (error: any) {
    console.error("GET request error:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * POST request (can include token)
 */
export const postRequest = async <T>(
  url: string,
  data?: Record<string, any>,
  token?: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await axiosInstance.post<T>(url, data, {
      headers: getHeaders(token),
      ...config,
    });
    return response.data;
  } catch (error: any) {
    console.error("POST request error:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * PUT request (optional, with token)
 */
export const putRequest = async <T>(
  url: string,
  data?: Record<string, any>,
  token?: string
): Promise<T> => {
  try {
    const response = await axiosInstance.put<T>(url, data, {
      headers: getHeaders(token),
    });
    return response.data;
  } catch (error: any) {
    console.error("PUT request error:", error.response?.data || error.message);
    throw error;
  }
};

/**
 * DELETE request (optional, with token)
 */
export const deleteRequest = async <T>(
  url: string,
  token?: string
): Promise<T> => {
  try {
    const response = await axiosInstance.delete<T>(url, {
      headers: getHeaders(token),
    });
    return response.data;
  } catch (error: any) {
    console.error(
      "DELETE request error:",
      error.response?.data || error.message
    );
    throw error;
  }
};
