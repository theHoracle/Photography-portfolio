import type { Metadata } from "next";
import AdminNav from "@/components/admin-components/AdminNav";


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
            <div className="mt-4 md:mt-8">
            {children}
            </div>
        </AdminNav>
  );
}
