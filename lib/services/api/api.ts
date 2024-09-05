import axios from 'axios';
import { getSession , signOut } from 'next-auth/react';

interface fetchClientProps {
    method?: string;
    path: string;
    body?: string;
    token?: string;
  }


const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});





export default api;
