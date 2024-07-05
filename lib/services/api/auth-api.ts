// import { LogIn } from "lucide-react"

import { User } from "next-auth";
import { JWT } from "next-auth/jwt";
import client from "./client";
// import server from "./server";
// import { AxiosResponse } from "axios";
import { ROUTES } from "@/lib/const";
// import { log } from "console";

interface Credentials {
  username: string; // Add username since it's being authenticated
  email: string;
  password: string;
}

export async function apiLogin(credentials: Credentials) {
  const response = await client.post(ROUTES.login, credentials);
  // const data: { user: User; token: string } = response.data; 
  return response.data;
}

export async function apiRegister(data: any) {
  const response = await client.post(ROUTES.freelancerRegister, data);
  const resdata: { user: User; token: string } = response.data;
  return { resdata, response };
}

export async function apiSignOut(token: JWT) {
  const response = await client.post(ROUTES.logout);
  return await response.data;
}

export async function fetchApiUser(token: JWT) {
  const response = await client.post(ROUTES.authUser);
  return response.data;
}

export async function apiAuthorize(credentials: Credentials) {
  const res = await apiLogin(credentials);
  if (!res.data?.token) {
    throw res.response;
  }
  return { ...res.data.user, access: res.data?.token };
}

export async function fetchRefreshAccessToken(token: string) {
  let response = await client.post(ROUTES.tokenRefresh, { refresh: token });
  const refreshedAccessToken: { access: string } = await response.data;
  return refreshedAccessToken;

  // const response = await fetchClient({
  //   method: "POST",
  //   url: process.env.NEXT_PUBLIC_API_URL + "/api/refresh",
  //   token: token.accessToken,
  // });

  // if (!response.ok) throw response;

  // const refreshedAccessToken: { access_token: string } = await response.json();
  // return refreshedAccessToken;
}
