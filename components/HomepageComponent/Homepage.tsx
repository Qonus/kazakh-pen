"use client";
import styles from "./Homepage.module.scss";
import Link from "next/link";

export default function Homepage() {
  return (
    <div>
      <div className={styles.main_section}>
        <div className={styles.main_section_wrapper}>
          <div className={styles.main_section__content_left}>
            <h1>Добро пожаловать на Kazakh Pen</h1>
            <p>
            Наш сайт предоставляет уникальную возможность углубиться в мир казахской литературы, где каждый пользователь может найти краткие содержания произведений известных казахских писателей. Мы стремимся сделать литературные шедевры доступными для широкой аудитории, предоставляя ясные и сжатые аннотации, которые помогают лучше понять основные темы и идеи каждого произведения.
            </p>
          </div>
          <div className={styles.main_section__content_right}>
            <Link className="button" href="/authors">
              <h1> Поиск <br /> Авторов </h1>
            </Link>
            <Link className="button" href="/articles">
            <h1> Поиск Произведений </h1>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.secondary_section}>
        <div className={styles.secondary_section_wrapper}>
          <p>
          Мы собираем мнения различных критиков и исследователей, что позволяет читателям увидеть многообразие интерпретаций и оценок. Это создает прекрасную возможность для обсуждения и анализа, побуждая пользователей формировать собственное мнение о литературных произведениях.
          </p>
        </div>
      </div>
    </div>
  );
}
