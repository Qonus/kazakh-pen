import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar_wrapper}>
          <div className={styles.navbar__header}>
            <h3>Kazakh Pen</h3>
          </div>
          <div className={styles.navbar__nav}>
            <Link href="/authors">Authors</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/">home</Link>
          </div>
        </div>
      </div>
      <div className={styles.fake_navbar}></div>
    </>
  );
}
