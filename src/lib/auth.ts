import { create } from 'zustand';
import { AuthState } from '@/types/auth';

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
}));

export async function login(email: string, password: string) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error('Login failed');

    const data = await response.json();
    useAuth.setState({ user: data.user, isAuthenticated: true, isLoading: false });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function register(email: string, password: string, licenseKey: string) {
  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, licenseKey }),
    });

    if (!response.ok) throw new Error('Registration failed');

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function logout() {
  try {
    await fetch('http://localhost:5000/api/auth/logout', {
      method: 'POST',
    });
    useAuth.setState({ user: null, isAuthenticated: false, isLoading: false });
  } catch (error) {
    throw error;
  }
}