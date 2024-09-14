import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import Navbar from "@/components/Navbar/NavbarComponent/Navbar";
import Footer from "@/components/FooterComponent/Footer";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
 
export const metadata: Metadata = {
  title: "Kazakh Pen",
  description:
    "Мир казахской литературы, краткие содержания произведений и статьи про известных казахских писателей.",
};

const inter = Inter({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
