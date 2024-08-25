import styles from "./AuthorCard.module.scss";
export default function AuthorCard({
  firstName,
  lastName,
  birthDate,
  deathDate,
}: {
  firstName: string;
  lastName: string;
  birthDate: number;
  deathDate: number;
}) {
  return (
    <>
      <div className={styles.card}>
        <p>
          {firstName} {lastName}
        </p>
        <b>
          {birthDate}-{deathDate}
        </b>
      </div>
    </>
  );
}
