import UserObject from "@/backend/objects/UserObject";
import styles from "./page.module.scss";
import AuthorInfo from "@/components/Author/AuthorInfoComponent/AuthorInfo";
import { supabase } from "@/lib/supabase";
import ArticleObject from "@/backend/objects/ArticleObject";
import ArticleCard from "@/components/ArticleCardComponent/ArticleCard";

async function fetchUserById(user_id?: string): Promise<UserObject> {
  const { data, error } = await supabase.rpc("get_users", {
    p_user_id: user_id,
  });

  if (error) {
    console.error("Error fetching users:", error);
    throw error;
  }

  return data[0] || null;
}

async function fetchArticlesByUserId(
  user_id?: string
): Promise<ArticleObject[]> {
  const { data, error } = await supabase.rpc("get_user_articles", {
    p_user_id: user_id,
  });

  if (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }

  return data || [];
}

interface AuthorPageProps {
  params: {
    id: string;
  };
}
export default async function AuthorPage({ params }: AuthorPageProps) {
  const { id } = params;
  let user: UserObject | null = await fetchUserById(id);
  if (!user) {
    return <p className="results_not_found_message">Автора не существует.</p>;
  }
  let articles: ArticleObject[] = await fetchArticlesByUserId(id);
  return (
    <div className={styles.author_page}>
      <div className={styles.author_page_wrapper}>
        <AuthorInfo
          firstName={user.first_name}
          lastName={user.last_name}
          pages={user.article_count}
          likes={user.total_likes}
          birthDate={new Date(user.birth_date || "").getFullYear().toString()}
          deathDate={new Date(user.death_date || "").getFullYear().toString()}
          nationality={user.nationality || "Казак"}
          description={user.description || ""}
          image={user.image || "/profile_picture_placeholder.png"}
        />
        <hr />
        <h3>Связанные статьи</h3>
        {articles.length ? (
          <div className={styles.author_page__related_articles}>
            {articles.map((article) => (
              <ArticleCard
                key={article.article_id}
                href={"/articles/" + article.article_id}
                title={article.title}
                image={article.image || "/default_image.jpg"}
              />
            ))}
          </div>
        ) : (
          <p className="results_not_found_message">
            Связанных с автором страниц не найдено
          </p>
        )}
      </div>
    </div>
  );
}
