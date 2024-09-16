import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar_wrapper}>
          <Link href="/" className={styles.navbar__header}>
            <Image
              className={styles.navbar__header__logo}
              src="/pen-feather.svg"
              width={50}
              height={50}
              alt="pen logo"
            />
            <h3>Kazakh Pen</h3>
          </Link>
          <div className={styles.navbar__nav}>
            <Link href="/authors">
              <p>Авторы</p>
            </Link>
            <Link href="/articles">
              <p>Статьи</p>
            </Link>
            <Link href="/">
              <p>Главная</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.fake_navbar}></div>
    </>
  );
}
