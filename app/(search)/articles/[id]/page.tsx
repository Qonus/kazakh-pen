import styles from "./page.module.scss";
import Article from "@/components/ArticleComponent/Article";

export default function ArticlePage({ parameters }: any) {
  return (
    <div className={styles.article_page}>
      <div className={styles.article_page_wrapper}>
        <Article title="Биография Абая" content="Слова" />
      </div>
    </div>
  );
}
