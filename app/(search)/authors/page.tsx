"use client";
import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBarComponent/SearchBar";
import styles from "./page.module.scss";
import UserObject from "@/backend/objects/UserObject";
import AuthorCardsList from "@/components/Author/AuthorCardsListComponent/AuthorCardsList";

async function fetchUsers(query?: string): Promise<UserObject[]> {
  const response = await fetch(`/api/users?query=${query || ""}`, {
    cache: "no-store",
  });
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
          <AuthorCardsList users={users} />
        ) : (
          <p className="results_not_found_message">Автор не найден.</p>
        )}
      </div>
    </div>
  );
}
