import styles from "./page.module.scss";
import AuthorInfo from "@/components/AuthorInfo/AuthorInfo";
import AuthorRelations from "@/components/AuthorRelations/AuthorRelations";

export default function AuthorPage({ params }: any) {
  return (
    <div className={styles.author_page}> 
      <div className={styles.author_page_wrapper}>
        <AuthorInfo />
        <AuthorRelations />
      </div>
    </div>
    );
}
