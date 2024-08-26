import styles from "./ArticleCard.module.scss";

export default function ArticleCard({
  topic = "",
}: {
  topic?: string;
}) {
  return (
    <>
      <div className={styles.card + " glass"}>
        <div className={styles.card__inner_text} >
          {topic}
        </div>
      </div>
    </>
  );
}