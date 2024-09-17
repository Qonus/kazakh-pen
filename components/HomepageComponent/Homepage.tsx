import { fetchArticles } from "@/backend/request/articles";
import styles from "./Homepage.module.scss";
import Image from "next/image";
import { fetchUsers } from "@/backend/request/users";
import ArticleCardsList from "../Article/ArticleCardsListComponent/ArticleCardsList";
import AuthorCardsList from "../Author/AuthorCardsListComponent/AuthorCardsList";
import Link from "next/link";
import ClientProfile from "../ClientProfileComponent/ClientProfile";

export default async function Homepage() {
  const top_articles = await fetchArticles("?limit=6");
  const top_users = await fetchUsers("?limit=6");

  return (
    <div className={styles.homepage}>
      <div className={styles.homepage_wrapper}>
        <ClientProfile></ClientProfile>
        <div className={styles.homepage__hero_section}>
          <Image
            src="/pen-feather.svg"
            alt="pen feather"
            width={120}
            height={120}
          />
          <div className={styles.homepage__hero_section__text}>
            <h1 className={styles.homepage__hero_section__text__header}>
              {" "}
              Kazakh Pen
            </h1>
            <div className={styles.homepage__description}>
              Мир казахской литературы, краткие содержания произведений и статьи
              про известных казахских писателей.
            </div>
          </div>
          {/* <Image
            className={styles.homepage__hero_section__image}
            src="/Abai_Kunanbaev.jpg"
            width={300}
            height={120}
            alt="pen logo"
          /> */}
        </div>

        <div className={styles.homepage__about_us_section + " glass"}>
          <Image
            className={styles.homepage__about_us_section__image}
            src="/Abai_Kunanbaev.jpg"
            alt=""
            width={300}
            height={300}
          />
          <div className={styles.homepage__about_us_section__text}>
            <div className={styles.homepage__about_us_section__text__header}>
              <h2>О нашем проекте</h2>
            </div>
            <div className={styles.homepage__description}>
              Kazakh Pen-проект, призваный помочь людям углубиться в историю и
              культуру Казахстана, путем централизации данных о различных
              казахских авторах. Наш проект создан что бы продвигать казахскую
              культуру и историю в массы, облегчая к ней доступ для обычных
              людей. Kazakh Pen также поможет заинтересованным проводить
              исследования о казахских авторах.
            </div>
          </div>
        </div>

        <div className={styles.homepage__top_articles}>
          <h1> Популярные произведения: </h1>
          <hr />
          <ArticleCardsList articles={top_articles} />
          <div className={styles.homepage__read_more_shadow}>
            <Link href="/articles" className="read_more_button">
              Узнать больше
            </Link>
          </div>
        </div>

        <div className={styles.homepage__top_users}>
          <h1> Популярные авторы </h1>
          <hr />
          <AuthorCardsList users={top_users} />
          <div className={styles.homepage__read_more_shadow}>
            <Link href="/authors" className="read_more_button">
              Узнать больше
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
