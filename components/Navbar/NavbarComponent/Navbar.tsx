import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import SelectLanguage from "../SelectLanguage/Selectlanguage";

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
            <SelectLanguage />
            <Link href="/authors">
              <p>Авторы</p>
            </Link>
            <Link href="/articles">
              <p>Статьи</p>
            </Link>
            <a href="/api/auth/login">Login</a>
            <a href="/api/auth/logout">Logout</a>
          </div>
        </div>
      </div>
      <div className={styles.fake_navbar}></div>
    </>
  );
}
