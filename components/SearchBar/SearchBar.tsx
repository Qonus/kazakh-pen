"use client";
import { useSearchParams } from "next/navigation";
import styles from "./SearchBar.module.scss";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  console.log(search);

  return (
    <>
      <form action="" method="get">
        <input className={styles.searchBar} name="query" placeholder="Поиск" />
        <input type="submit" value="Поиск" />
      </form>
    </>
  );
}
