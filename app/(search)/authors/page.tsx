"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import SearchBar from "@/components/SearchBar/SearchBar";
import AuthorCard from "@/components/AuthorCard/AuthorCard";
import styles from "./page.module.scss";
import User from "@/backend/objects/User";

async function fetchUsers(query?: string): Promise<User[]> {
  let fetchedData: User[] = [];

  try {
    const { data: users, error: userError } = await supabase
      .from("users")
      .select("*");

    if (userError) throw userError;

    if (query) {
      fetchedData =
        users?.filter(
          (user) =>
            user.first_name.toLowerCase().includes(query.toLowerCase()) ||
            user.last_name.toLowerCase().includes(query.toLowerCase())
        ) || [];
    } else {
      fetchedData = users || [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
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
                birth_date={user.birth_date}
                death_date={user.death_date}
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
