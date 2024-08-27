import Image from "next/image";
import styles from "./ArticleCard.module.scss";
import Link from "next/link";

export default function ArticleCard({
  href,
  title = "",
  likes = 0,
  image = "/default_image.jpg",
}: {
  href: string;
  title?: string;
  likes?: number;
  image?: string;
}) {
  return (
    <Link href={href} className={styles.article_card + " glass"}>
      <Image
        className={styles.article_card__image}
        src={image}
        width={600}
        height={600}
        alt="article image"
      />
      <div className={styles.article_card__stats}>
        <Image
          className={"primary_color_svg " + styles.article_card__stats__heart}
          src="/heart.svg"
          width={30}
          height={30}
          alt="like icon"
        />
        <p>{likes}</p>
      </div>
      <div className={styles.article_card__title}>
        <p>{title}</p>
      </div>
    </Link>
  );
}
