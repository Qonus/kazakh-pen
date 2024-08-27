import ArticleObject from "@/backend/objects/ArticleObject";
import styles from "./page.module.scss";
import Article from "@/components/ArticleComponent/Article";
import { supabase } from "@/lib/supabase";
import UserObject from "@/backend/objects/UserObject";
import AuthorCard from "@/components/Author/AuthorCardComponent/AuthorCard";

async function fetchArticleById(article_id?: string): Promise<ArticleObject> {
  const { data, error } = await supabase.rpc("get_articles", {
    p_article_id: article_id,
  });

  if (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }

  return data[0] || null;
}

async function fetchUsersByArticleId(
  article_id?: string
): Promise<UserObject[]> {
  const { data, error } = await supabase.rpc("get_article_users", {
    p_article_id: article_id,
  });

  if (error) {
    console.error("Error fetching article users:", error);
    throw error;
  }

  return data || [];
}

export default async function ArticlePage({ params }: any) {
  const { id } = params;
  let article: ArticleObject | null = await fetchArticleById(id);
  if (!article) {
    return (
      <p className="results_not_found_message">Произведение не существует.</p>
    );
  }
  let users: UserObject[] = await fetchUsersByArticleId(id);
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
            {users.map((user) => (
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
