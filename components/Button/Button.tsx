"use client"

import styles from "./Button.module.scss";
export default function Button({
  text,
  header,
  сlick,
}: {
  text: string;
  header: string;
  сlick: any;
}) {
  return (
    <>
      <button className={styles.button} onClick={сlick}>
        <p>{header}</p>
        <p>{text}</p>
      </button>
    </>
  );
}
