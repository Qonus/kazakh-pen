import Image from "next/image";
import styles from "./AuthorCard.module.scss";
import Link from "next/link";
export default function AuthorCard({
  href,
  first_name,
  last_name,
  birth_date = "",
  death_date = "",
  image = "/profile_picture_placeholder.png",
}: {
  href: string;
  first_name: string;
  last_name: string;
  birth_date?: string;
  death_date?: string;
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
      </div>
    </Link>
  );
}
