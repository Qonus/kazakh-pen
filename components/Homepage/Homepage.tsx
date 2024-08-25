"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";
import Standart_text from "@/components/Standart_text/standart_text";
import styles from "./Homepage.module.scss";
import Link from "next/link";

export default function Homepage() {
  const pathname = usePathname();
  return (
    <div>
      <div className={styles.main_section}>
        <div className={styles.main_section_wrapper}>
          <div className={styles.main_section__content_left}>
            <Header text="Халуми" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget ligula ante. Morbi placerat sapien eget diam porta
              consectetur. Donec vitae felis et odio feugiat vehicula.
              Pellentesque consectetur ligula eget libero bibendum imperdiet eu
              id erat. Aenean semper est ipsum, sed venenatis velit sodales sed.
              Nunc mattis, erat sit amet vulputate tristique, augue est mollis
              mauris, in cursus nibh purus eget nunc. Sed et laoreet lacus, quis
              rhoncus mi.
            </p>
          </div>
          <div className={styles.main_section__content_right}>
            <Link className="button" href="/test">
              Поесть халуми
            </Link>

            <Link className="button" href="/test">
              Поесть халуми
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.secondary_section}>
        <div className={styles.secondary_section_wrapper}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            ligula ante. Morbi placerat sapien eget diam porta consectetur.
            Donec vitae felis et odio feugiat vehicula. Pellentesque consectetur
            ligula eget libero bibendum imperdiet eu id erat. Aenean semper est
            ipsum, sed venenatis velit sodales sed. Nunc mattis, erat sit amet
            vulputate tristique, augue est mollis mauris, in cursus nibh purus
            eget nunc. Sed et laoreet lacus, quis rhoncus mi.
          </p>
        </div>
      </div>
    </div>
  );
}
