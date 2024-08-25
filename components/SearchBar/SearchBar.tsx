"use client";
import { useState } from "react";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInput(newValue);
    onSearch(newValue);
  };

  return (
    <form>
      <input
        className={styles.searchBar}
        value={input}
        onChange={handleChange}
        placeholder="Поиск"
        autoComplete="off"
      />
    </form>
  );
}
