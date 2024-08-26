import styles from "./page.module.scss";
import Biography from "@/components/Biography/Biography";

export default function ArticlePage({ parameters }: any) {
  return (
    <div className={styles.article_page}> 
      <div className={styles.article_page_wrapper}>
        <Biography title="Биография Абая" content="Слова"/>
      </div>
    </div>
    );
}