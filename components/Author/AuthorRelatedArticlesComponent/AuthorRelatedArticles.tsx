import styles from "./AuthorRelations.module.scss";
import ArticleCard from "../../Article/ArticleCardComponent/ArticleCard";
import Link from "next/link";

//я не знаю как передавать сюда динамическое количество карточек и работ если честно
export default function AuthorRelatedArticles({ params }: any) {
  return (
    <>
      <div className={styles.relations}>
        <h1 className={styles.h1}>Related Articles</h1>
        <div className={styles.relations__related_pages}>
          <ArticleCard title="Биография" href="/articles/1" />
          <ArticleCard title="Восемь7" href="/articles/1" />
        </div>
        <h1 className={styles.h1}>Works</h1>
        <div className={styles.relations__works}>
          <Link href="/"> Название работы </Link>
          <Link href="/"> Название работы </Link>
          <Link href="/"> Название работы </Link>
          <Link href="/"> Название работы </Link>
          <Link href="/"> Название работы </Link>
          <Link href="/"> Название работы </Link>
        </div>
      </div>
    </>
  );
}
