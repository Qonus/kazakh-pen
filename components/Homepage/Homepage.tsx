"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";
import Standart_text from "@/components/Standart_text/standart_text";
import styles from "./Homepage.module.scss";

function Redirect(pathname: string) {
  location.href = `${pathname}test`;
}

export default function Homepage() {
  const pathname = usePathname();
  return (
    <div className={styles.main_section}>
      <div className={styles.main_section_wrapper}>
        <div className={styles.main_section__content_left}>
          <Header text="Халуми" />
          <Standart_text text="это стандартный текст про халуми" />
        </div>
        <div className={styles.main_section__content_right}>
          <Button
            text="Поесть халмуми"
            header="Халуми это гуд"
            сlick={() => Redirect(pathname)}
          />
          <Button
            text="Поесть халмуми"
            header="Халуми это гуд"
            сlick={() => Redirect(pathname)}
          />
        </div>
      </div>
    </div>
  );
}
