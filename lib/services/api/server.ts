'use server'
import { authOptions } from "@/lib/auth-options";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
// import "server-only";

const server = axios.create({
  baseURL: process.env.SERVER_API_URL || process.env.NEXT_PUBLIC_API_URL, // Server-side API URL or fallback to public API URL
  headers: {
    "Content-Type": "application/json",
    "accept": "application/json",
  },
});

// Interceptor to add server-side authentication token
server.interceptors.request.use(
  async (config) => {
    const session = await getServerSession(authOptions);
    if (session) {
      config.headers.Authorization = `Bearer ${session.user.access}`; // modified
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Interceptor to handle 401 responses
server.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error) => {
    if (error.response && error.response.status === 401) {
        return redirect("/login");
    }
    return Promise.reject(error);
  }
);

export default server;
