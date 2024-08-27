import styles from "./Article.module.scss";
import Image from "next/image";

export default function Article({
  title = "Заголовок",
  publish_date,
  last_changed,
  image,
  content = "Содережание",
}: {
  title: string;
  publish_date: string;
  last_changed: string;
  image: string;
  content: string;
}) {
  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
}
