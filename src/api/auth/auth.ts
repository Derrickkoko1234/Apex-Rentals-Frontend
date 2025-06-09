import { LoginCredentials, User } from "@/types/auth.types";
import { ApiResponse } from "@/types/general.types";
import { fetchWithAuth, setAuthToken, removeAuthToken } from "@/utils/apiUtils";

export interface LoginResponseData {
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
    '/auth/login', 
    {
      method: 'POST',
      body: credentials
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


/**
 * Logout user
 */
export const logoutUser = async (): Promise<void> => {
  await fetchWithAuth('/auth/logout', { method: 'POST' });
  
  // Remove the token after logout
  removeAuthToken();
};
