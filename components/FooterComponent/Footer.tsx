import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer_wrapper}>
          <hr />
          <h5>Kazakh Pen © 2024</h5>
        </div>
      </div>
      <div className={styles.fake_footer}></div>
    </>
  );
}
