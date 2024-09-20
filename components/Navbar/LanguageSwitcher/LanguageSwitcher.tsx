"use client";
import { useRouter, usePathname } from "@/src/i18n/routing"; // Adjust based on your custom routing
import { useTranslations } from "next-intl"; // Assuming you're using next-intl
import styles from "./LanguageSwitcher.module.scss";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <div className={styles.languageSwitcher}>
      <button onClick={() => router.replace(pathname, {locale:"kz"})}> Каз </button>
      <button onClick={() => router.replace(pathname, {locale:"ru"})}> Рус </button>
    </div>
    
  );
}
