import styles from "./ArticleCard.module.scss";
export default function ArticleCard({
  topic,
}: {
  topic: string;
}) {
  return (
    <>
      <div className={styles.card_biography}>
        <div className={styles.card_biography__inner_text}>
          {topic}
        </div>
      </div>
    </>
  );
}