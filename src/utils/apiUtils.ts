/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { API_URL } from "@/config/config";

// Types
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface FetchOptions {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: any;
  credentials?: RequestCredentials;
}

/**
 * Get authentication token from localStorage
 */
export const getAuthToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
};

/**
 * Set authentication token in localStorage
 */
export const setAuthToken = (token: string): void => {
  localStorage.setItem("token", token);
};

/**
 * Remove authentication token from localStorage
 */
export const removeAuthToken = (): void => {
  localStorage.removeItem("token");
};

/**
 * Make an authenticated API request
 * Automatically adds the auth token if available
 */
export const fetchWithAuth = async <T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> => {
  const token = getAuthToken();

  // Prepare headers with auth token if available
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers["Authorization"] = `${token}`;
  }

  // Prepare the request options
  const requestOptions: RequestInit = {
    method: options.method || "GET",
    headers,
    // Only use 'include' if you really need cookies to be sent
    // For token-based auth, 'same-origin' is often sufficient
    credentials: "same-origin", // Changed from 'include'
    ...(options.body && {
      body:
        typeof options.body === "string"
          ? options.body
          : JSON.stringify(options.body),
    }),
  };

  // Make the request
  const response = await fetch(`${API_URL}${endpoint}`, requestOptions);

  if (!response.ok) {
    try {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `API request failed with status ${response.status}`
      );
    } catch (_) {
      // If parsing JSON fails, throw a generic error
      throw new Error(`API request failed with status ${response.status}`);
    }
  }

  // Parse the response
  return response.json();
};
