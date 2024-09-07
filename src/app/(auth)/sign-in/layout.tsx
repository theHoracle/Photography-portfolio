import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Latunji Portfolio",
  description: "Login to Admin dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <main>
            {children}
        </main>
  );
};