"use client";
import React, { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBarComponent/SearchBar";
import styles from "./ArticlesPage.module.scss";
import ArticleCardsList from "@/components/Article/ArticleCardsListComponent/ArticleCardsList";
import { fetchArticles } from "@/backend/request/articles";
import ArticleObject from "@/backend/objects/ArticleObject";


import { NextIntlClientProvider } from 'next-intl';
import { useTranslations } from "next-intl";

interface ArticlesPageProps {
  query?: string ;
  locale: string;
  messages: any;
}

export default function ArticlesPage({ query: initialQuery = "", locale, messages }: ArticlesPageProps) {
  const [articles, setArticles] = useState<ArticleObject[]>([]);
  const [query, setQuery] = useState(initialQuery || "");
  const t = useTranslations('Articles');


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
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SearchBar onSearch={(newQuery) => setQuery(newQuery)}  header={t('search')} />
      <div className={styles.results_wrapper}>
        {articles.length ? (
          <ArticleCardsList articles={articles} />
        ) : (
          <p className={styles.results_not_found_message}>Произведение не найдено.</p>
        )}
      </div>
    </NextIntlClientProvider>
  );
}