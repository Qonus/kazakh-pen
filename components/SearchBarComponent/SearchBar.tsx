"use client";
import { useState } from "react";
import styles from "./SearchBar.module.scss";
import Image from "next/image";

export default function SearchBar({
  onSearch,
  header,
}: {
  onSearch: (query: string) => void;
  header?: string;
}) {
  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInput(newValue);
    onSearch(newValue);
  };

  return (
    <form className={styles.search_bar}>
      <div className={styles.search_bar_wrapper}>
        <div className={styles.search_bar__header}>
          <h1>{header}</h1>
        </div>
        <div className={styles.search_bar__bar}>
          <Image
            className={styles.search_bar__bar__icon}
            src="/search.svg"
            width={30}
            height={30}
            alt="search icon"
          />
          <input
            className={styles.search_bar__bar__input}
            value={input}
            onChange={handleChange}
            placeholder="Поиск"
            autoComplete="off"
          ></input>
        </div>
      </div>
    </form>
  );
}
