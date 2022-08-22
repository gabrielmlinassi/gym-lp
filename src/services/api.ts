import axios from 'axios';
import { getSession } from 'next-auth/react';
import Router from 'next/router';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(async (config) => {
  if (config.headers) {
    const session = await getSession();
    config.headers.Authorization = `Bearer ${session?.accessToken || ''}`;
  }
  return config;
});

api.interceptors.response.use(async (response) => {
  /**
   * As we are using GraphQL and it's returning 200 for all responses,
   * including errors, the only exceptions that may be thrown are of status 5xx
   */
  if (response.status.toString().startsWith('5')) {
    Router.push('/500');
  }
  return response;
});
