import { GetServerSideProps } from "next";
import { supabase } from "@/lib/supabase";
import SearchBar from "@/components/SearchBar/SearchBar";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query.query as string | null;

  let users: User[] = [];

  try {
    if (query) {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .ilike("first_name", `%${query}%`)
        .or(`last_name.ilike.%${query}%`)
        .order("first_name", { ascending: true });

      if (error) throw error;

      users = data || [];
    } else {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .order("first_name", { ascending: true });

      if (error) throw error;

      users = data || [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      users,
      query,
    },
  };
};

export default function AuthorsPage({
  users,
  query,
}: {
  users: User[];
  query: string | null;
}) {
  return (
    <>
      <SearchBar />
      <div>
        {users.length ? (
          <ul>
            {users.map((user) => (
              <li key={user.user_id}>
                {user.first_name} {user.last_name}
              </li>
            ))}
          </ul>
        ) : (
          <p>
            {query ? `No results found for "${query}".` : "No results found."}
          </p>
        )}
      </div>
    </>
  );
}
