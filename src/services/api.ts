import axios from 'axios';
import Constants from 'expo-constants';

const API_BASE_URL = Constants.manifest?.extra?.API_BASE_URL || process.env.API_BASE_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};
