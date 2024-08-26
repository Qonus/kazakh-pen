import Image from "next/image";
import styles from "./AuthorCard.module.scss";
import Link from "next/link";
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
        <div className={styles.author_card__info_bottom}>
          {/* <div>
            <Image
              className="primary_color_svg"
              src="/heart.svg"
              width={15}
              height={15}
              alt="like icon"
            />
            <p>{likes}</p>
          </div> */}

          <div>
            <p>{pages}</p>
            <p>страниц</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
