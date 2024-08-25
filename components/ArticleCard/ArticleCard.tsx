import styles from "./ArticleCard.module.scss";
export default function ArticleCard({
  topic,
}: {
  topic: string;
}) {
  return (
    <>
      <div className={styles.card_biography}>
        БИОГРАФИЧЕСКИЙ ТЕКСТ ЕПТЫГЫДЫК
      </div>
    </>
  );
}