// import { LogIn } from "lucide-react"

import { User } from "next-auth";
import { JWT } from "next-auth/jwt";
import client from "./client";
import server from "./server";
import { AxiosResponse } from "axios";
import { ROUTES } from "@/lib/const";



const useServerByDefault = false;

interface Credentials {
  email: String;
  password: String;
}

export async function apiLogin(credentials: Credentials, useServer = useServerByDefault) {
  let response: AxiosResponse;
  if (useServer) {
    response = await server.post(ROUTES.login, credentials);
  } else {
    response = await client.post(ROUTES.login, credentials);
  }
  const data: { user: User; token: string } = response.data;
  return { data, response };
}

export async function apiRegister(data: any, useServer = useServerByDefault) {
  let response: AxiosResponse;
  if (useServer) {
    response = await server.post(ROUTES.freelancerRegister, data);
  } else {
    response = await client.post(ROUTES.freelancerRegister, data);
  }
  const resdata: { user: User; token: string } = response.data;
  return { resdata, response };
}

export async function apiSignOut(token: JWT, useServer = useServerByDefault) {
  let response: AxiosResponse;
  if (useServer) {
    response = await server.post(ROUTES.logout);
  } else {
    response = await client.post(ROUTES.logout);
  }
  return await response.data;
}

export async function fetchApiUser(token: JWT, useServer = useServerByDefault) {
  let response: AxiosResponse;
  if (useServer) {
    response = await server.post(ROUTES.authUser);
  } else {
    response = await client.post(ROUTES.authUser);
  }
  return await response.data;
}

export async function apiAuthorize(credentials: Credentials) {
  const res = await apiLogin(credentials!);
  if (!res.data?.token) {
    throw res.response;
  }
  return { ...res.data.user, accessToken: res.data?.token };
}

export async function fetchRefreshAccessToken(token: JWT, useServer = useServerByDefault) {
  let response: AxiosResponse;
  if (useServer) {
    response = await server.post(ROUTES.authUser);
  } else {
    response = await client.post(ROUTES.authUser);
  }
  const refreshedAccessToken: { access_token: string } = await response.data;
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
