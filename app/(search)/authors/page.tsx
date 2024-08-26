"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import SearchBar from "@/components/SearchBar/SearchBar";
import AuthorCard from "@/components/AuthorCard/AuthorCard";

interface User {
  user_id: number;
  type: "historical_figure" | "simple_user";
  first_name: string;
  last_name: string;
  description?: string;
  birth_date?: string;
  death_date?: string;
  nationality?: string;
  image?: string;
  created_at: string;
  updated_at: string;
}

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
      <SearchBar onSearch={(newQuery) => setQuery(newQuery)} />
      <div>
        {users.length ? (
          <ul>
            {users.map((user) => (
              <AuthorCard
                key={user.user_id}
                first_name={user.first_name}
                last_name={user.last_name}
                birth_date={user.birth_date}
                death_date={user.death_date}
              ></AuthorCard>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}
