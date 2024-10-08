"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main>
      <header className='container flex justify-between items-center bg-orange-100 py-5'>
        <Link href='/profile' className='text-xl font-semibold'>
          SkillAfrika
        </Link>

        <Link
          href='/profile/prof-reg'
          className='bg-orange-500 py-2 px-4 rounded-md text-white'>
          Update profile
        </Link>
        <button
          className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md'
          onClick={() => signOut()}>
          Log out
        </button>
      </header>
      <div>{children}</div>
    </main>
  );
}
