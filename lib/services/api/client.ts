import axios from "axios";
import { getSession } from "next-auth/react";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

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
