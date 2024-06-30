import axios, { AxiosError, AxiosResponse } from "axios";
import { getSession, signOut } from "next-auth/react";

interface fetchClientProps {
  method?: string;
  path: string;
  body?: string;
  token?: string;
}

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to add authentication token
client.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
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
      signOut({ callbackUrl: "/auth/login" }); // Redirect to login page after sign out
    }
    return Promise.reject(new Error("Failed to fetch data", { cause: error }));
  }
);

export default client;

// export default api;
