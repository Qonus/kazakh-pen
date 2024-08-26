import Image from "next/image";
import styles from "./AuthorInfo.module.scss";

export default function AuthorInfo({
  firstName = "Abai",
  lastName = "Kunanbaev",
  birthDate = "1999",
  deathDate = "2000",
  description = "",
}: {
  firstName: string;
  lastName: string;
  birthDate: string;
  deathDate: string;
  description: string;
}) {
  return (
    <div className={styles.info + " glass"}>
      <div className={styles.info__left}>
        <Image
          src="/Abai_Kunanbaev.jpg"
          alt="Picture of the author"
          width={200}
          height={200}
          className={styles.user_img}
        />
        <p className={styles.dates}>
          {birthDate} - {deathDate}
        </p>
      </div>
      <div className={styles.info__right}>
        <h1>
          {firstName} {lastName}
        </h1>

        <p>{description}</p>
      </div>
    </div>
  );
}
