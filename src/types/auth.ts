export interface User {
  id: string;
  email: string;
  role: 'admin' | 'manager' | 'user';
  licenseKey?: string;
  apiKeys?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  licenseKey: string;
}