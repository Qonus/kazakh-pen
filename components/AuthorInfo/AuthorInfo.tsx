import Image from "next/image";
import styles from "./AuthorInfo.module.scss"; 

export default function AuthorInfo({params = {firstName: "Abai", lastName:"Kunanbaev", birthDate:"1999", deathDate:"2000", description:"",  likes: "", relatedArticles: ""}}:
    {params?:{firstName: string, lastName: string, birthDate: string, deathDate: string, description: string, likes: string, relatedArticles:string}}){
    return(
    <div className={styles.info + " glass"}>
        <div className={styles.info__left}>
            <Image
            src="/Abai_Kunanbaev.jpg"
            alt="Picture of the author"
            width={150}
            height={150}
            className={styles.user_img} />
            <p className={styles.secondary_text}>({params.birthDate}-{params.deathDate})</p>
        </div>
        <div className={styles.info__right}>
            <h1>{params.firstName}_{params.lastName}</h1>
            <p className={styles.secondary_text}> ❤️{params.likes}_Связанных статей: {params.relatedArticles}</p>
            <p className={styles.ellipsis}>{params.description}</p>
        </div>
    </div>
    )
    
}


        