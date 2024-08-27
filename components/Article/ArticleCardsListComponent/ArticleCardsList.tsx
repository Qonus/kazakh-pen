import ArticleObject from "@/backend/objects/ArticleObject";
import ArticleCard from "../ArticleCardComponent/ArticleCard";
import styles from "./ArticleCardsList.module.scss";

export default function ArticleCardsList({
  articles,
}: {
  articles: ArticleObject[];
}) {
  return (
    <div className={styles.article_cards_list}>
      {articles.map((article) => (
        <ArticleCard
          key={article.article_id}
          href={"/articles/" + article.article_id}
          likes={article.likes}
          title={article.title}
          image={article.image || "/default_image.jpg"}
        ></ArticleCard>
      ))}
    </div>
  );
}
