import styles from "./AuthorRelations.module.scss"
import ArticleCard from "../ArticleCard/ArticleCard"
import Link from "next/link"

export default function AuthorRelations({params}:any){
    return(
        <>
        <div className={styles.relations}>
          <h1 className={styles.h1}>Related Articles</h1>
          <div className={styles.relations__related_pages}>
            <ArticleCard topic = "Биография" type="biography"/> 
            <ArticleCard/>
            <ArticleCard topic = "Восемь7"/>
          </div>
          <h1 className={styles.h1}>Works</h1>
          <div className={styles.relations__works}>
            <Link href = "/"> Название работы </Link>
          </div>
        </div>
        </>
    )
}