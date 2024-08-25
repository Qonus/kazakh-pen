import styles from "./SearchBar.module.scss"
export default function SearchBar({

}: {

}) {
  return (
    <>
      <input className={styles.searchBar} placeholder="Поиск">
        
      </input>
    </>
  );
}