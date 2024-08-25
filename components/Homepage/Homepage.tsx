"use client"
import { usePathname } from 'next/navigation'
import Header from "@/components/Header/Header"
import Button from "@/components/Button/Button"
import Standart_text from "@/components/Standart_text/standart_text"
import styles from "./Homepage.module.scss"

function Redirect(pathname: string) {
    location.href=`${pathname}test`;
 }

export default function Homepage(){
    const pathname = usePathname();
    return(
        <div>
            <Header text = "Халуми"/><br />
            <Standart_text text = "это стандартный текст про халуми" />
            <Button text = "Поесть халмуми" header="Халуми это гуд" сlick = {()=> Redirect(pathname)}/>
            <div className={styles.right}><Button text = "Поесть халмуми" header="Халуми это гуд" сlick = {()=> Redirect(pathname)}/></div>
        </div>
    )
}