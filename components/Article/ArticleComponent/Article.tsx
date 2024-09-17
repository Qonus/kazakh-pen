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
    <>
    <div className={styles.dates}>Создано: {publish_date}, Последнее изменение: {last_changed}</div>
    <Image 
    className={styles.article__img}
    src={image}
    alt="article_image"
    width={800}
    height={400}
    layout="responsive"
    />
    <div
    dangerouslySetInnerHTML={{
      __html:
        `
  <style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .quote{
      padding:10px;
      background-color: rgba(255, 255, 255, 0.1);
      outline: rgba(255, 255, 255, 0.2) solid 1px;
      border-radius: 10px;
      box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.2);
      width:80%;
      height: fit-content;
      align-self: center;
  }

  h1{
      align-self: center;
  }
  </style>
` + content,
    }}
  ></div>
  </>
    
  );
}
