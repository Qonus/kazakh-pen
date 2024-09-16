"use client"
import { Link } from "@/src/i18n/routing"
import { useRouter, usePathname } from "@/src/i18n/routing";
import styles from "./LanguageSwitcher.module.scss"

export default function LanguageSwitcher(){
    const router = useRouter();
    const pathname = usePathname();
    return(
        <>
        <div className={styles.links}>
                <button type="button" onClick={() => router.replace(String(pathname), {locale: 'kaz'})}>
                    Қаз
                </button>
                <button type="button" onClick={() => router.replace(String(pathname), {locale: 'rus'})}>
                    Рус
                </button>
        </div>  
        </>
    )
}