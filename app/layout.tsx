import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/app/context/authprovider";
import ReactQueryProvider from "@/components/query/react-query-provider";
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
        <AuthProvider>
          <ReactQueryProvider> {children}</ReactQueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
