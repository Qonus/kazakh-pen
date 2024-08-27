"use client";

import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBarComponent/SearchBar";
import styles from "./page.module.scss";
import ArticleCardsList from "@/components/Article/ArticleCardsListComponent/ArticleCardsList";
import { fetchArticles } from "@/backend/request/articles";
import ArticleObject from "@/backend/objects/ArticleObject";

export default function ArticlesPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const [articles, setArticles] = useState<ArticleObject[]>([]);
  const [query, setQuery] = useState(searchParams.query || "");

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await fetchArticles(`?query=${query}`);
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
          <ArticleCardsList articles={articles} />
        ) : (
          <p className="results_not_found_message">Произведение не найдено.</p>
        )}
      </div>
    </div>
  );
}
