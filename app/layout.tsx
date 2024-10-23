import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import AuthProvider from "@/app/context/authprovider";
import ReactQueryProvider from "@/components/query/react-query-provider";
=======
import { SessionProvider } from "next-auth/react"
import AuthProvider from '@/app/context/authprovider';

>>>>>>> Main_features
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skill Afrika",
  description: "Empowering young Africans with skills and opportunities",
  icons: {
    icon: '/vercel.svg'
  }
    
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
<<<<<<< HEAD
        <AuthProvider>
          <ReactQueryProvider> {children}</ReactQueryProvider>
        </AuthProvider>
      </body>
=======
      <AuthProvider>
        {children}
      </AuthProvider>
        </body>
>>>>>>> Main_features
    </html>
  );
}
