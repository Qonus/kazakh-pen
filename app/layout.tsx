import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import Navbar from "@/components/Navbar/NavbarComponent/Navbar";
import Footer from "@/components/FooterComponent/Footer";
import { UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata: Metadata = {
  title: "Kazakh Pen",
  description:
    "Мир казахской литературы, краткие содержания произведений и статьи про известных казахских писателей.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
        <Navbar />
        {children}
        <Footer />
        </UserProvider>
        
      </body>
    </html>
  );
}
