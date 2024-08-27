import ArticleObject from "@/backend/objects/ArticleObject";
import styles from "./page.module.scss";
import Article from "@/components/ArticleComponent/Article";
import { supabase } from "@/lib/supabase";
import UserObject from "@/backend/objects/UserObject";
import AuthorCard from "@/components/Author/AuthorCardComponent/AuthorCard";

async function fetchArticleData(article_id?: string) {
  const response = await fetch(
    `http://localhost:3000/api/articles/${article_id}`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch article data");
  }
  return response.json();
}

export default async function ArticlePage({ params }: any) {
  const { id } = params;
  let articleData;

  try {
    articleData = await fetchArticleData(id);
  } catch (error) {
    return (
      <p className="results_not_found_message">Произведение не существует.</p>
    );
  }

  const { article, users } = articleData;

  if (!article) {
    return (
      <p className="results_not_found_message">Произведение не существует.</p>
    );
  }
  return (
    <div className={styles.article_page}>
      <div className={styles.article_page_wrapper}>
        <Article
          title={article.title}
          publish_date={article.published_date || "не опубликовано"}
          last_changed={article.updated_at || ""}
          image={article.image || "/default_image.jpg"}
          content={article.content}
        />
        {users.length ? (
          <div className={styles.article_page__related_authors}>
            {users.map((user: any) => (
              <AuthorCard
                key={user.user_id}
                href={"/authors/" + user.user_id}
                first_name={user.first_name}
                last_name={user.last_name}
                birth_date={new Date(user.birth_date || "")
                  .getFullYear()
                  .toString()}
                death_date={new Date(user.death_date || "")
                  .getFullYear()
                  .toString()}
                likes={user.total_likes}
                pages={user.article_count}
                image={user.image || "/profile_picture_placeholder.png"}
              ></AuthorCard>
            ))}
          </div>
        ) : (
          <p className={styles.article_page__related_authors_not_found}>
            Связанных с статьей авторов не найдено
          </p>
        )}
      </div>
    </div>
  );
}
