"use client";
import styles from "./Homepage.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Homepage() {
  return (
      <div className={styles.container}>
        <div className={styles.container_wrapper}>
          <div className={styles.container__header}>
            <Image 
              src="/pen-feather.svg"
              alt="pen feather"
              width={120}
              height={120}
            />
            <div className={styles.container__header__text}>
              <h1> Kazakh Pen</h1>
              <div className={styles.container__header__text__description}>
                Мир казахской литературы, краткие содержания произведений и статьи про известных казахских писателей. 
              </div>
            </div>
                <Image
                  className={styles.container__header__image}
                  src="/Abai_Kunanbaev.jpg"
                  width={300}
                  height={120}
                  alt="pen logo"
                />
          </div>

          <div className={styles.container__about_us+" glass"}>
              <Image 
                className={styles.container__about_us__img}
                src="/Abai_Kunanbaev.jpg"
                alt=""
                width={120}
                height={100}
              />
              <div>
                <h2>О нашем проекте</h2>
                <p> Kazakh Pen-проект, призваный помочь людям углубиться в историю и  культуру Казахстана, путем централизации данных о различных казахских  авторах. Наш проект создан что бы продвигать казахскую культуру и  историю в массы, облегчая к ней доступ для обычных людей. Kazakh Pen  также поможет заинтересованным проводить исследования о казахских  авторах.</p>
              </div>
          </div>
        </div>
      </div>
  );
}
