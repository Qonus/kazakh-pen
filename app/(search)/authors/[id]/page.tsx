import styles from "./page.module.scss";
import AuthorInfo from "@/components/AuthorInfo/AuthorInfo";
import AuthorRelations from "@/components/AuthorRelations/AuthorRelations";

export default function AuthorPage({ parameters }: any) {
  return (
    <div className={styles.author_page}> 
      <div className={styles.author_page_wrapper}>
        <AuthorInfo params={{ firstName: "Qonys", lastName: "Aibat", birthDate:"1845", deathDate:"1904", description: "Author of many great works."}} />
        <AuthorRelations />
      </div>
    </div>
    );
}
