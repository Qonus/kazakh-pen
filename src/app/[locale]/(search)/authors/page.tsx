"use client"
import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBarComponent/SearchBar";
import styles from "./page.module.scss";
import UserObject from "@/backend/objects/UserObject";
import AuthorCardsList from "@/components/Author/AuthorCardsListComponent/AuthorCardsList";
import { fetchUsers } from "@/backend/request/users";

//for internationalisation
import { NextIntlClientProvider } from 'next-intl';
import { useLocale } from "next-intl";



export default function AuthorsPage(params: { locale: string; query?: string; messages: any; }) {
  const {  locale, query:initialQuery, messages } = params;
  let currentLocale = useLocale();

  const [users, setUsers] = useState<UserObject[]>([]);
  const [query, setQuery] = useState(initialQuery || "");

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
    <div>
      <NextIntlClientProvider locale={currentLocale} messages={messages}>
        <SearchBar onSearch={(newQuery) => setQuery(newQuery)} />
      </NextIntlClientProvider>
      
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
