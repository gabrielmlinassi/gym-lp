import axios from 'axios';
import { getSession, signOut } from 'next-auth/react';
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
  if (response.status === 401) {
    await signOut();
    // log to sentry?
  } else if (response.status === 404) {
    Router.push('/404');
  } else if (response.status === 500) {
    Router.push('/500');
  }
  return response;
});
