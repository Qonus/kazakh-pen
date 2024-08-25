import styles from "./AuthorCard.module.scss";
export default function AuthorCard({
  first_name,
  last_name,
  birth_date = "",
  death_date = "",
}: {
  first_name: string;
  last_name: string;
  birth_date?: string;
  death_date?: string;
}) {
  return (
    <>
      <div className={styles.author_card}>
        <p>
          {first_name} {last_name}
        </p>
        <b>
          {birth_date}-{death_date}
        </b>
      </div>
    </>
  );
}
