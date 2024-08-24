"use client";

import styles from "./Button.module.scss";
export default function Button({
  text,
  header,
  click,
}: {
  text: string;
  header: string;
  click: any;
}) {
  return (
    <>
      <button className={styles.button} onClick={() => click()}>
        <p>{header}</p>
        <p>{text}</p>
      </button>
    </>
  );
}
