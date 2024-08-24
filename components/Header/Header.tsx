import styles from "./Header.module.scss";
export default function Header({
  text,
}: {
  text: string;
}) {
  return (
    <>
      <header className={styles.header}>
        <p>{text}</p>
      </header>
    </>
  );
}