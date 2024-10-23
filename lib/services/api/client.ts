import axios, { AxiosError, AxiosResponse } from "axios";
import { getSession, signOut } from "next-auth/react";

interface fetchClientProps {
  method?: string;
  path: string;
  body?: string;
  token?: string;
}
import axios from "axios";
import { getSession } from "next-auth/react";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

// Interceptor to add authentication token
client.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session) {
      config.headers.Authorization = `Bearer ${session.user.access}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
client.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      signOut({ callbackUrl: "/users/login/" }); // Redirect to login page after sign out
    }
    return Promise.reject(error);
  }
);

client.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session && session.user) {
      config.headers.Authorization = `Bearer ${session.user.access}`; // Attach token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;

// export default api;
