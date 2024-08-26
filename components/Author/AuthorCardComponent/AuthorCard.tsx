import Image from "next/image";
import styles from "./AuthorCard.module.scss";
import Link from "next/link";
import AuthorNumbers from "../AuthorNumbersComponent/AuthorNumbers";
export default function AuthorCard({
  href,
  first_name,
  last_name,
  birth_date = "",
  death_date = "",
  likes = 0,
  pages = 0,
  image = "/profile_picture_placeholder.png",
}: {
  href: string;
  first_name: string;
  last_name: string;
  birth_date?: string;
  death_date?: string;
  likes?: number;
  pages?: number;
  image?: string;
}) {
  return (
    <Link href={href} className={styles.author_card + " glass"}>
      <Image
        className={styles.author_card__profile_picture}
        src={image}
        width={60}
        height={60}
        alt="author image"
      />
      <div className={styles.author_card__info}>
        <h4>
          {first_name} {last_name} | {birth_date} - {death_date}
        </h4>
        <AuthorNumbers pages={pages} likes={likes} />
      </div>
    </Link>
  );
}
