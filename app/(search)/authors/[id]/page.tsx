import User from "@/backend/objects/User";
import styles from "./page.module.scss";
import AuthorInfo from "@/components/Author/AuthorInfoComponent/AuthorInfo";
import AuthorRelations from "@/components/Author/AuthorRelationsComponent/AuthorRelations";
import { supabase } from "@/lib/supabase";

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
        />
        <AuthorRelations />
      </div>
    </div>
  );
}
