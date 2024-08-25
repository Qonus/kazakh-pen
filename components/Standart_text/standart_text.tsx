import styles from "./standart_text.module.scss";

export default function Standart_text({text}: {text:string}){
    return(
        <>
        <a className={styles.standart_text}> {text} </a>
        </>
    )
}