import styles from "./page.module.scss";
import AuthorInfo from "@/components/Author/AuthorInfoComponent/AuthorInfo";
import AuthorRelations from "@/components/Author/AuthorRelationsComponent/AuthorRelations";

export default function AuthorPage() {
  return (
    <div className={styles.author_page}>
      <div className={styles.author_page_wrapper}>
        <AuthorInfo
          firstName="Qonys"
          lastName="Aibat"
          pages={0}
          likes={0}
          birthDate="1845"
          deathDate="1904"
          nationality="Kazakh"
          description="Kазахский поэт, философ, музыкант, народный просветитель, общественный деятель, основоположник казахской письменной литературы и её первый классик, реформатор культуры в духе сближения с европейской культурой на основе культуры просвещённого ислама.Был одним из первых казахских писателей, кто активно использовал прозу в своих произведениях, расширяя жанровые границы казахской литературы. В своих произведениях Абай Кунанбаев выразил глубокие мысли о национальной идентичности, любви к родине, природе и человеческим ценностям.Настоящее имя — Ибрагим, но прозвище Абай (каз. Абай «внимательный», «осторожный»), данное бабушкой Зере, закрепилось за ним на всю жизнь."
        />
        <AuthorRelations />
      </div>
    </div>
  );
}
