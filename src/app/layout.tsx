import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Kazakh Pen",
  description:
    "Мир казахской литературы, краткие содержания произведений и статьи про известных казахских писателей.",
};

const inter = Inter({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
