import styles from "./style.module.css"

export const Footer = () => {
    return(
        <footer className={styles.container}>
            <div className={styles.footerInfo}>
            <h2 className="title2">Contato</h2>
            <img className={styles.footerImg} src="src/assets/whatsapp-icon.png" alt="" />
            <img className={styles.footerImg}  src="src/assets/linkedin-icon.png" alt="" />
            <img className={styles.footerImg}  src="src/assets/github-icon.png" alt="" />
            </div>
            <p className="paragraph">Todos os direitos reservados - José da Silva</p>
        </footer>
    )
}