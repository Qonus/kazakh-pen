import styles from "./ArticleCard.module.scss";

export default function ArticleCard({
  topic = "",
}: {
  topic?: string;
}) {
  return (
    <>
      <div className={styles.card} id={styles.biography}>
        <div className={styles.card__inner_text}>
          {topic}
        </div>
      </div>
    </>
  );
}