import Image from "next/image";
import styles from "./AuthorInfo.module.scss"; 

export default function AuthorInfo({params = {firstName: "Abai", lastName:"Kunanbaev", description:""}}:
    {params?:{firstName: string, lastName: string, description: string}}){
    return(
    <div className={styles.info}>
        <div>
              <Image
              src="/Abai_Kunanbaev.jpg"
              alt="Picture of the author"
              width={150}
              height={150}
              className={styles.user_img} />  
              </div>
              <div>
                <h1>{params.firstName}_{params.lastName}</h1>
                <p>{params.description}</p>
        </div>
    </div>
    )
    
}


        