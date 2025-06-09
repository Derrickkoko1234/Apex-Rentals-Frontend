import {
  LoginCredentials,
  RegisterCredentials,
  User,
} from "@/types/auth.types";
import { ApiResponse } from "@/types/general.types";
import { fetchWithAuth, setAuthToken, removeAuthToken } from "@/utils/apiUtils";

export interface LoginResponseData {
  user: User;
  token: string;
}

export interface RegisterResponseData {
  user: User;
  token: string;
}

/**
 * Login user with provided credentials
 */
export const loginUser = async (
  credentials: LoginCredentials
): Promise<ApiResponse<LoginResponseData>> => {
  const response = await fetchWithAuth<ApiResponse<LoginResponseData>>(
    "/auth/login",
    {
      method: "POST",
      body: credentials,
    }
  );

  // Store the token when login is successful
  if (response.data?.token) {
    setAuthToken(response.data.token);
  }

  return response;
};

/**
 * Register a new user
 */
export const registerUser = async (
  credentials: RegisterCredentials
): Promise<ApiResponse<RegisterResponseData>> => {
  const response = await fetchWithAuth<ApiResponse<RegisterResponseData>>(
    "/auth/register",
    {
      method: "POST",
      body: credentials,
    }
  );

  return response;
};

/**
 * Logout user
 */
export const logoutUser = async (): Promise<void> => {
  await fetchWithAuth("/auth/logout", { method: "POST" });

  // Remove the token after logout
  removeAuthToken();
};
