import UserObject from "@/backend/objects/UserObject";
import styles from "./page.module.scss";
import AuthorInfo from "@/components/Author/AuthorInfoComponent/AuthorInfo";
import { supabase } from "@/lib/supabase";
import ArticleObject from "@/backend/objects/ArticleObject";
import ArticleCard from "@/components/ArticleCardComponent/ArticleCard";

async function fetchAuthorData(id: string) {
  const response = await fetch(`http://localhost:3000/api/users/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch author data");
  }
  return response.json();
}

interface AuthorPageProps {
  params: {
    id: string;
  };
}
export default async function AuthorPage({ params }: AuthorPageProps) {
  const { id } = params;
  let authorData;

  try {
    authorData = await fetchAuthorData(id);
  } catch (error) {
    return <p className="results_not_found_message">Автора не существует.</p>;
  }

  const { user, articles } = authorData;

  if (!user) {
    return <p className="results_not_found_message">Автора не существует.</p>;
  }
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
            {articles.map((article: ArticleObject) => (
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
