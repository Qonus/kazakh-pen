import AuthorCard from "../AuthorCardComponent/AuthorCard";
import styles from "./AuthorCardsList.module.scss";
import UserObject from "@/backend/objects/UserObject";

export default function AuthorCardsList({ users }: { users: UserObject[] }) {
  return (
    <div className={styles.author_cards_list}>
      {users.map((user) => (
        <AuthorCard
          key={user.user_id}
          href={"/authors/" + user.user_id}
          first_name={user.first_name}
          last_name={user.last_name}
          birth_date={new Date(user.birth_date || "").getFullYear().toString()}
          death_date={new Date(user.death_date || "").getFullYear().toString()}
          likes={user.total_likes}
          pages={user.article_count}
          image={user.image || "/profile_picture_placeholder.png"}
        ></AuthorCard>
      ))}
    </div>
  );
}
