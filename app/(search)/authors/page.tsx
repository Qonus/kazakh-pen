// app/authors/page.tsx
"use client";
import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBarComponent/SearchBar";
import AuthorCard from "@/components/Author/AuthorCardComponent/AuthorCard";
import styles from "./page.module.scss";
import UserObject from "@/backend/objects/UserObject";

async function fetchUsers(query?: string): Promise<UserObject[]> {
  const response = await fetch(`/api/users?query=${query || ""}`);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}

export default function AuthorsPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const [users, setUsers] = useState<UserObject[]>([]);
  const [query, setQuery] = useState(searchParams.query || "");

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const initialUsers = await fetchUsers(query);
        setUsers(initialUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchInitialData();
  }, [query]);

  return (
    <div>
      <SearchBar
        header="Поиск Авторов"
        onSearch={(newQuery) => setQuery(newQuery)}
      />
      <div className={styles.results_wrapper}>
        {users.length ? (
          <ul className={styles.results__list}>
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
          </ul>
        ) : (
          <p className="results_not_found_message">Автор не найден.</p>
        )}
      </div>
    </div>
  );
}
