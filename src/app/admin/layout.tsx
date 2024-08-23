import AdminNav from "@/components/admin-components/AdminNav";

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Admin - Latunji Portfolio",
  description: "Admin dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <AdminNav>
    {children}
        </AdminNav>
  );
}
