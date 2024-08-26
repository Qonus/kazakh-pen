import Image from "next/image";
import styles from "./AuthorCard.module.scss";
export default function AuthorCard({
  first_name,
  last_name,
  birth_date = "",
  death_date = "",
  image = "/profile_picture_placeholder.png",
}: {
  first_name: string;
  last_name: string;
  birth_date?: string;
  death_date?: string;
  image?: string;
}) {
  return (
    <div className={styles.author_card}>
      <div className={styles.author_card_wrapper}>
        <div className={styles.author_card__card + " glass"}>
          <Image
            className={styles.author_card__card__profile_picture}
            src={image}
            width={60}
            height={60}
            alt="author image"
          />
          <div className={styles.author_card__card__info}>
            <h4>
              {first_name} {last_name} | {birth_date} - {death_date}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
