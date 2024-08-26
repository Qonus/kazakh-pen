import User from "@/backend/objects/User";
import styles from "./page.module.scss";
import AuthorInfo from "@/components/Author/AuthorInfoComponent/AuthorInfo";
import { supabase } from "@/lib/supabase";
import Article from "@/backend/objects/Article";
import ArticleCard from "@/components/ArticleCardComponent/ArticleCard";

async function fetchUserById(user_id: string) {
  let user: User | null = null;

  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("user_id", user_id)
      .single();

    if (error) {
      console.error("Error fetching user:", error);
    } else {
      user = data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return user || null;
}

async function fetchArticlesByUserId(user_id?: string): Promise<Article[]> {
  const { data, error } = await supabase
    .from("article_users")
    .select("articles(*)")
    .eq("user_id", user_id);

  if (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
  return data?.map((entry: { articles: any }) => entry.articles) || [];
}

interface AuthorPageProps {
  params: {
    id: string;
  };
}
export default async function AuthorPage({ params }: AuthorPageProps) {
  const { id } = params;
  let user: User | null = await fetchUserById(id);
  if (!user) {
    return <p className={styles.results__message}>User not found.</p>;
  }
  let articles: Article[] = await fetchArticlesByUserId(id);
  return (
    <div className={styles.author_page}>
      <div className={styles.author_page_wrapper}>
        <AuthorInfo
          firstName={user.first_name}
          lastName={user.last_name}
          pages={0}
          likes={0}
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
          <p className={styles.results__message}>No results found.</p>
        )}
      </div>
    </div>
  );
}
