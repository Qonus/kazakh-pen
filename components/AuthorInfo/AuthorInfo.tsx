import Image from "next/image";
import styles from "./AuthorInfo.module.scss";

export default function AuthorInfo({
  firstName = "Abai",
  lastName = "Kunanbaev",
  birthDate = "1999",
  deathDate = "2000",
  nationality = "Казак",
  description = "",
}: {
  firstName: string;
  lastName: string;
  birthDate: string;
  deathDate: string;
  nationality: string;
  description: string;
}) {
  return (
    <div className={styles.author_info + " glass"}>
      <div className={styles.author_info__left}>
        <Image
          className={styles.author_info__left__image}
          src="/Abai_Kunanbaev.jpg"
          alt="Picture of the author"
          width={200}
          height={200}
        />
        <p className={styles.author_info__text}>
          {birthDate} - {deathDate}
        </p>
        <p className={styles.author_info__text}>{nationality}</p>
      </div>
      <div className={styles.author_info__right}>
        <h1>
          {firstName} {lastName}
        </h1>

        <p
          className={
            styles.author_info__text + " " + styles.author_info__ellipsis
          }
        >
          {description}
        </p>
      </div>
    </div>
  );
}
