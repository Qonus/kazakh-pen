import styles from "./page.module.scss";

export default async function NotFound() {
  return (
    <div className={styles.not_found_wrapper}>
      <h2>404 Page Not Found</h2>
    </div>
  );
}
