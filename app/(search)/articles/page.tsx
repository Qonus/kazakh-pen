"use client";

import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBarComponent/SearchBar";
import styles from "./page.module.scss";
import ArticleCard from "@/components/ArticleCardComponent/ArticleCard";
import Article from "@/backend/objects/ArticleObject";

async function fetchArticles(query?: string): Promise<Article[]> {
  const response = await fetch(
    `/api/articles?query=${encodeURIComponent(query || "")}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  return response.json();
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
      try {
        const response = await fetchArticles(query);
        setArticles(response);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
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
          <p className="results_not_found_message">Произведение не найдено.</p>
        )}
      </div>
    </div>
  );
}
