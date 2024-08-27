import styles from "./Article.module.scss";

export default function Article({
  title = "Заголовок",
  publish_date,
  last_changed,
  content = "Содережание",
}: {
  title: string;
  publish_date:string;
  last_changed: string;
  content: string;
}) {
  return (
    <div className={styles.article}>
      <div className={styles.article_wrapper}>
        <div className={styles.title}>
          <h1>{title}</h1>
          <p className={styles.dates}> дата публикации: {publish_date}, последнее изменение:{last_changed} </p>
        </div>
        <p className={styles.p}>{content}</p>
      </div>
    </div>
  );
}
