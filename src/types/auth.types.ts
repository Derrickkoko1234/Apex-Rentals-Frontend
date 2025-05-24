export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginCredentials {
  name: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}