import { fetchArticles } from "@/backend/request/articles";
import styles from "./Homepage.module.scss";
import Image from "next/image";
import { fetchUsers } from "@/backend/request/users";
import ArticleCardsList from "../Article/ArticleCardsListComponent/ArticleCardsList";
import AuthorCardsList from "../Author/AuthorCardsListComponent/AuthorCardsList";

//for internationalisation
import {ReactNode} from 'react';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/src/i18n/routing';

export default async function Homepage(locale: any) {
  const top_articles = await fetchArticles("?limit=6");
  const top_users = await fetchUsers("?limit=6");
  const t = await getTranslations('HomePage');
  
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage_wrapper}>
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
              {t('title')}
            </h1>
            <div className={styles.homepage__description}>
              {t('about')}
            </div>
          </div>
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
              <h2>{t('about_us')}</h2>
            </div>
            <div className={styles.homepage__description}>
              {t('description')}
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
