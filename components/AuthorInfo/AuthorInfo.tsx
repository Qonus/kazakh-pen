import Image from "next/image";
import styles from "./AuthorInfo.module.scss"; 

export default function AuthorInfo({params}:any){
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
                <h1>Абай Құнанбаев</h1>
                <p>Гигатекст для гигаопльзователя</p>
                <p>Гигатекст для гигаопльзователя</p>
                <p>Гигатекст для гигаопльзователя</p>
                <p>Гигатекст для гигаопльзователя</p>
        </div>
    </div>
    )
    
}


        