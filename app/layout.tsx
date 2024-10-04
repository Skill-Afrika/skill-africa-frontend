import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "@/app/context/authprovider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skill Afrika",
  description: "Empowering young Africans with skills and opportunities",
  icons: {
    icon: "/vercel.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
