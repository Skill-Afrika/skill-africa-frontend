import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth-options";
import LoginForm from "@/components/login-form";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  if (session?.user) redirect("/profile");
  return <LoginForm />
}
