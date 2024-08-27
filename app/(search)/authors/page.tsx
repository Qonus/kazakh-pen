"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import SearchBar from "@/components/SearchBarComponent/SearchBar";
import AuthorCard from "@/components/Author/AuthorCardComponent/AuthorCard";
import styles from "./page.module.scss";
import User from "@/backend/objects/User";
import AuthorStats from "@/backend/objects/AuthorStats";

async function fetchUsers(query?: string): Promise<User[]> {
  let fetchedData: User[] = [];

  const { data, error } = await supabase.rpc("get_users", {});

  if (error) throw error;

  if (query) {
    fetchedData =
      data?.filter(
        (user: User) =>
          user.first_name.toLowerCase().includes(query.toLowerCase()) ||
          user.last_name.toLowerCase().includes(query.toLowerCase())
      ) || [];
  } else {
    fetchedData = data || [];
  }

  return fetchedData;
}

export default function AuthorsPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState(searchParams.query || "");

  useEffect(() => {
    const fetchInitialData = async () => {
      const initialUsers = await fetchUsers(query);
      setUsers(initialUsers);
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
          <p className={styles.results__message}>No results found.</p>
        )}
      </div>
    </div>
  );
}
