import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function AuthorsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        try {
          const response = await fetch(
            `/api/search?query=${encodeURIComponent(query)}`
          );
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        const response = await fetch("/api/default");
        const result = await response.json();
        setData(result);
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
      <SearchBar />
      <div>
        {data.length ? (
          <ul>
            {data.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </>
  );
}
