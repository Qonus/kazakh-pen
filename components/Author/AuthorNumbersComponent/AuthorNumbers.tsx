import Image from "next/image";
import styles from "./AuthorNumbers.module.scss";

export default function AuthorNumbers({
  likes = 0,
  pages = 0,
}: {
  likes: number;
  pages: number;
}) {
  return (
    <div className={styles.author_numbers}>
      <div>
        <Image
          className="primary_color_svg"
          src="/heart.svg"
          width={15}
          height={15}
          alt="like icon"
        />
        <p>{likes}</p>
        <p>Лайков</p>
      </div>

      <div>
        <p>{pages}</p>
        <p>Страниц</p>
      </div>
    </div>
  );
}
