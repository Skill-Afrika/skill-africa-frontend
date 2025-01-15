import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ProfilePage from "@/components/profile/profile-page";
import { authOptions } from "@/lib/auth-options";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/register");
  return <ProfilePage />;
}
