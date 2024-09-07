import type { Metadata } from "next";
import AdminNav from "@/components/admin-components/AdminNav";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import { getReviews } from "@/hooks/get-reviews";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Home - Latunji Portfolio",
  description: "Admin dashboard",
}; 

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const reviews = await getReviews()
  return (
        <main className="bg-red-400">
            <main className="flex flex-col w-screen overflow-hidden bg-background">
        <Navbar />
        <div className="sm:mt-20">
        {children}
        {
       reviews &&
       <Testimonials reviews={reviews} />}
        </div>
        <Footer />
        </main>
        </main>
  );
}
