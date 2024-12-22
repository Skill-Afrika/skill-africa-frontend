import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/app/context/authprovider";
import ReactQueryProvider from "@/components/query/react-query-provider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
      <body className={`${poppins.variable} antialiased`}>
        <AuthProvider>
          <ReactQueryProvider> {children}</ReactQueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
