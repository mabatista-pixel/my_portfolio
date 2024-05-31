import styles from "./style.module.css"
import whatsappIcon from "../../assets/whatsapp-icon.png"
import linkedinIcon from "../../assets/linkedin-icon.png"
import githubIcon from "../../assets/github.png"

export const Footer = () => {
    return(
        <footer className={styles.container}>
            <div className={styles.footerInfo}>
            <h2 className="title2">Contato</h2>
            <img className={styles.footerImg} src={whatsappIcon} alt="Icone Whatsapp" />
            <img className={styles.footerImg}  src={linkedinIcon} alt="Icone Linkedin" />
            <img className={styles.footerImg}  src={githubIcon} alt="Icone Github" />
            </div>
            <p className="paragraph">Todos os direitos reservados - Matheus Batista</p>
        </footer>
    )
}