import styles from "./Article.module.scss";

export default function Article({
  title = "Заголовок",
  content = "Содережание",
  language,
}: {
  title: string;
  content: string;
  language?: string;
}) {
  return (
    <div className={styles.article}>
      <div className={styles.article_wrapper}>
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
        <p className={styles.p}>{content}</p>
      </div>
    </div>
  );
}
