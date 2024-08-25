import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.navbar__header}>
          <h3>Header</h3>
        </div>
        <div className={styles.navbar__nav}>
          <Link href="/">Link</Link>
          <Link href="/">Link</Link>
          <Link href="/">Link</Link>
        </div>
      </div>
    </div>
  );
}
