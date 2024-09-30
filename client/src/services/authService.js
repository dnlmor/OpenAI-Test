import { registerUser, loginUser } from '../api/authApi';
import { saveToLocal, removeFromLocal } from './storageService';
import { setToken } from '../utils/auth';

export const signup = async (userData) => {
  const response = await registerUser(userData);
  setToken(response.token);
  saveToLocal('user', response.user);
  return response;
};

export const login = async (credentials) => {
  const response = await loginUser(credentials);
  setToken(response.token);
  saveToLocal('user', response.user);
  return response;
};

export const logout = () => {
  removeFromLocal('user');
  removeToken();
};
