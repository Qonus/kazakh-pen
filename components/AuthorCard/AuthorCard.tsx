import styles from "./AuthorCard.module.scss"
export default function AuthorCard({
 firstName,
 lastName,
 birthDate,
 deathDate
}: {
 firstName: string;
 lastName: string;
 birthDate: number;
 deathDate: number;
}) {
  return (
    <>
      <div className={styles.card}> 
        <a>{firstName} {lastName}</a>
        <b>{birthDate}-{deathDate}</b>
      </div>
    </>
  );
}