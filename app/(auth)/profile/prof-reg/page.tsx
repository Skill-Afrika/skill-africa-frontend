import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ProfileUpdate } from "@/components/profile-reg";
import { authOptions } from "@/lib/auth-options";

async function ProfileReg() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login");
  return <ProfileUpdate />;
}

export default ProfileReg;
