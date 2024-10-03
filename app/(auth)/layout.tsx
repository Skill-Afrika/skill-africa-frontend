"use client";

import client from "@/lib/services/api/client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const { data } = useSession();
  const session = data?.user;
  // console.log(session);

  useEffect(() => {
    if (session) {
      client.defaults.headers.Authorization = `Bearer ${session.access}`;
    }
  }, [session]);

  return (
    <main>
      <header className='container flex justify-between items-center bg-orange-100 py-5'>
        <div className='text-xl font-semibold'>SkillAfrika</div>
        {session && (
          <>
            <Link
              href='/profile/prof-reg'
              className='bg-orange-500 py-2 px-4 rounded-md text-white'>
              Complete Registration
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
