import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/ClientProviders";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Latunji Photography",
  description: "Latunji Photography Portfolio: See, Book and Contact.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <body className={inter.className}>
       <Providers>
        {children}
       </Providers>
       <Toaster />
        </body>
    </html>
  );
}
