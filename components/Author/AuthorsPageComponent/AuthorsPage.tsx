"use client"
import React, { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBarComponent/SearchBar";
import styles from "./AuthorsPage.module.scss";
import UserObject from "@/backend/objects/UserObject";
import AuthorCardsList from "@/components/Author/AuthorCardsListComponent/AuthorCardsList";
import { fetchUsers } from "@/backend/request/users";


import { NextIntlClientProvider, useTranslations } from 'next-intl';

interface AuthorsPageProps {
  locale: string;
  query?: string;
  messages: any;
}

export default function AuthorsPage({ locale, query: initialQuery = "", messages }: AuthorsPageProps) {
  const [users, setUsers] = useState<UserObject[]>([]);
  const [query, setQuery] = useState(initialQuery);
  const t = useTranslations('Authors');

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const initialUsers = await fetchUsers(`?query=${query}`);
        setUsers(initialUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchInitialData();
  }, [query]);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SearchBar onSearch={(newQuery) => setQuery(newQuery)} header={t('search')}/>
      <div className={styles.results_wrapper}>
        {users.length ? (
          <AuthorCardsList users={users} />
        ) : (
          <p className={styles.results_not_found_message}>Автор не найден.</p>
        )}
      </div>
    </NextIntlClientProvider>
  );
}
