"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import SearchBar from "@/components/SearchBarComponent/SearchBar";
import styles from "./page.module.scss";
import ArticleCard from "@/components/ArticleCardComponent/ArticleCard";
import Article from "@/backend/objects/Article";

async function fetchArticles(query?: string): Promise<Article[]> {
  let fetchedData: Article[] = [];

  try {
    const { data, error } = await supabase.from("articles").select("*");

    if (error) throw error;

    if (query) {
      fetchedData =
        data?.filter((article) =>
          article.title.toLowerCase().includes(query.toLowerCase())
        ) || [];
    } else {
      fetchedData = data || [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return fetchedData;
}

export default function ArticlesPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [query, setQuery] = useState(searchParams.query || "");

  useEffect(() => {
    const fetchInitialData = async () => {
      const response = await fetchArticles(query);
      setArticles(response);
    };

    fetchInitialData();
  }, [query]);

  return (
    <div>
      <SearchBar
        header="Поиск Произведений"
        onSearch={(newQuery) => setQuery(newQuery)}
      />
      <div className={styles.results_wrapper}>
        {articles.length ? (
          <ul className={styles.results__list}>
            {articles.map((article) => (
              <ArticleCard
                key={article.article_id}
                href={"/articles/" + article.article_id}
                title={article.title}
                image={article.image || "/default_image.jpg"}
              ></ArticleCard>
            ))}
          </ul>
        ) : (
          <p className={styles.results__message}>No results found.</p>
        )}
      </div>
    </div>
  );
}
