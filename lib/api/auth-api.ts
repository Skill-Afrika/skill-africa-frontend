// import { LogIn } from "lucide-react"

import fetchClient from "@/lib/fetch-client";
import { User } from "next-auth";
import { JWT } from "next-auth/jwt";

interface Credentials {
    username: String,
    password: String
}

export async  function apiLogin(credentials: Credentials){
    const response = await fetchClient({
        method: "POST",
        url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/auth/login",
        body: JSON.stringify(credentials),
      });
      
      if (!response.ok) {

        throw response;
      }

      const data: { user: User; token: string } = await response.json();
      return {data, response};
}


export async  function apiRegister(data: any){
  const response = await fetchClient({
    method: "POST",
    url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/register",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw response;
  }
}



export async  function apiSignOut(token: JWT){
    const response =  await fetchClient({
        method: "POST",
        url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/logout",
        token: token.accessToken,
      });
      return await response.json()
}


export async  function fetchApiUser(token: JWT){
    const response = await fetchClient({
        url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/user",
        token: token.accessToken,
      });
      const user = await response.json();
      return user;
}

export async  function apiAuthorize(credentials: Credentials){
    const res = await apiLogin(credentials!);
    if (!res.data?.token) {
        throw res.response;
      }
      return { ...res.data.user, accessToken: res.data?.token };
}


export async function fetchRefreshAccessToken(token: JWT) {
      const response = await fetchClient({
        method: "POST",
        url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/refresh",
        token: token.accessToken,
      });
  
      if (!response.ok) throw response;
  
      const refreshedAccessToken: { access_token: string } = await response.json();
      return refreshedAccessToken;
  }