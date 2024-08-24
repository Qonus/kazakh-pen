import styles from "./Header.module.scss";
export default function Header({
  text,
}: {
  text: string;
}) {
  return (
    <>
      <h1 className={styles.header}>
        <p>{text}</p>
      </h1>
    </>
  );
}