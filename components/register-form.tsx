"use client";

import { Input } from "@/components/ui/input";
import { apiRegister } from "@/lib/services/api/auth-api";
import fetchClient from "@/lib/fetch-client";
import { signIn } from "next-auth/react";

export default function RegisterForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      await apiRegister(Object.fromEntries(formData))
      const credentials = {
        email: formData.get("email"),
        password: formData.get("password"),
      };

      signIn("credentials", credentials);
    } catch (error) {
      if (error instanceof Response) {
        const response = await error.json();
        if (!response.errors) {
          throw error;
        }
      }

      throw new Error("An error has occurred during registration request");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <Input
        id="name"
        name="name"
        type="text"
        // defaultValue="John Doe"
      />

      <label htmlFor="email">Email</label>
      <Input
        id="email"
        name="email"
        type="email"
        // defaultValue="john@avocado-media.nl"
      />

      <label htmlFor="password">Password</label>
      <Input
        id="password"
        name="password"
        type="password"
        // defaultValue="password"
      />

      <label htmlFor="password_confirmation">Password confirmation</label>
      <Input
        id="password_confirmation"
        name="password_confirmation"
        type="password"
        // defaultValue="password"
      />

      <button type="submit">Register</button>
    </form>
  );
}
