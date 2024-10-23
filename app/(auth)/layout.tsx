"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useGetProfile } from "../api/get-profile";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const { data } = useSession();
  const id = data?.user?.user?.uuid;

  const { data: profileData } = useGetProfile(id);

  console.log(profileData);

  return (
    <main>
      <header className='container flex justify-between items-center bg-orange-100 py-5'>
        <Link href='/profile' className='text-xl font-semibold'>
          SkillAfrika
        </Link>
        {data && (
          <>
            <Link
              href='/profile/prof-reg'
              className='bg-orange-500 py-2 px-4 rounded-md text-white'>
              {profileData ? "Edit Profile" : "Update profile"}
            </Link>
            <button
              className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md'
              onClick={() => signOut()}>
              Log out
            </button>
          </>
        )}
      </header>
      <div>{children}</div>
    </main>
  );
}
