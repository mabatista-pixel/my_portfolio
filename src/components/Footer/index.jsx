import styles from "./style.module.css"
import whatsappIcon from "../../assets/whatsapp-icon.png"
import linkedinIcon from "../../assets/linkedin-icon.png"
import githubIcon from "../../assets/github.png"

export const Footer = () => {
    return(
        <footer className={styles.container}>
            <div className={styles.footerInfo}>
                <h2 className="title2">Contato</h2>
                    <a href="https://github.com/mabatista-pixel" target="_blank" rel="noopener noreferrer">
                        <img className={styles.footerImg}  src={githubIcon} alt="Icone Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/matheus-batista-cesar-62037a278/" target="_blank" rel="noopener noreferrer">
                        <img className={styles.footerImg}  src={linkedinIcon} alt="Icone Linkedin" />
                    </a>
            </div>
            <p className="paragraph">Todos os direitos reservados - Matheus Batista</p>
        </footer>
    )
}