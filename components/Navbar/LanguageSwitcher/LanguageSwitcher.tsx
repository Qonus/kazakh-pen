"use client";
import { useRouter, usePathname } from "@/src/i18n/routing"; // Adjust based on your custom routing
import { useTranslations } from "next-intl"; // Assuming you're using next-intl
import styles from "./LanguageSwitcher.module.scss";
import { useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();
  const [currentLocale, setCurrentLocale] = useState("ru");

  const languages = [
    { code: "kz", label: "Қазақ" },
    { code: "ru", label: "Русский" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value as "ru" | "kz";
    setCurrentLocale(selectedLocale);
    router.replace(String(pathname), { locale: selectedLocale });
  };

  return (
    <div className={styles.languageSwitcher}>
      <select
        onChange={handleChange}
        value={currentLocale}
        className={styles.languageSelect}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
