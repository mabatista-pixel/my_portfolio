import styles from "./style.module.css"
import whatsappIcon from "../../assets/whatsapp-icon.png"
import linkedinIcon from "../../assets/linkedin-icon.png"
import githubIcon from "../../github-icon.png"

export const Footer = () => {
    return(
        <footer className={styles.container}>
            <div className={styles.footerInfo}>
            <h2 className="title2">Contato</h2>
            <img className={styles.footerImg} src={whatsappIcon} alt="" />
            <img className={styles.footerImg}  src={linkedinIcon} alt="" />
            <img className={styles.footerImg}  src={githubIcon} alt="" />
            </div>
            <p className="paragraph">Todos os direitos reservados - José da Silva</p>
        </footer>
    )
}