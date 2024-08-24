"use client"

import styles from "./Button.module.scss";
export default function Button({
  text,
  header,
  сlicky,
}: {
  text: string;
  header: string;
  сlicky: any;
}) {
  return (
    <>
      <button className={styles.button} onClick={сlicky}>
        <p>{header}</p>
        <p>{text}</p>
      </button>
    </>
  );
}
