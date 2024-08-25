import styles from "./ArticleCard.module.scss";

export default function ArticleCard({
  topic = "",
  type = "",
}: {
  topic?: string;
  type?: string;
}) {
  let cardId:string = "";
  if(type == "biography"){
    cardId = `${styles.biography}`;
  }
  return (
    <>
      <div className={styles.card} id={cardId}>
        <div className={styles.card__inner_text} id={cardId}>
          {topic}
        </div>
      </div>
    </>
  );
}