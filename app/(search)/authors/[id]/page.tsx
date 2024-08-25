import Image from "next/image";
import styles from "./page.module.scss";
import ArticleCard from "@/components/ArticleCard/ArticleCard"

export default function AuthorPage({ params }: any) {
  return (
    <div className={styles.author_page}> 
      <div className={styles.author_page_wrapper}>
        <div className={styles.author_page__info}>
          <div>
          <Image
          src="/Abai_Kunanbaev.jpg"
          alt="Picture of the author"
          width={150}
          height={150}
          className={styles.user_img} />  
          </div>
          <div>
            <h1>Абай Құнанбаев</h1>
            <p>Гигатекст для гигаопльзователя</p>
            <p>Гигатекст для гигаопльзователя</p>
            <p>Гигатекст для гигаопльзователя</p>
            <p>Гигатекст для гигаопльзователя</p>
          </div>
        </div>
        <div className={styles.author_page__relations}>
          <h1 className={styles.h1}>Related Articles</h1>
          <div className={styles.author_page__relations__related_pages}>
            <ArticleCard topic = "Биография" type="biography"/> 
            <ArticleCard/>
            <ArticleCard topic = "Восемь7"/>
          </div>
        </div>
      </div>
    </div>
    );
}
