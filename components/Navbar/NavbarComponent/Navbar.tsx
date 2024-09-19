import styles from "./Navbar.module.scss";
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Link from "next/link";

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
            <li>
              <LanguageSwitcher />
            </li>
            <li>
              <Link href="/authors">
                <p>Авторы</p>
              </Link>
            </li>
            <li>
              <Link href="/articles">
                <p>Статьи</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p>Главная</p>
              </Link>
            </li>
          </div>
        </div>
      </div>
      <div className={styles.fake_navbar}></div>
    </>
  );
}
