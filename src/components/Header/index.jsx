import styles from "./style.module.css"
import portfolioImg from "../../assets/portfolio.png"

export const Header = () => {
    return(
        <header className={styles.flexbox}>
            <img src={portfolioImg} alt="Imagem Logo" />
            <div className={styles.clickable}>
                <a className={styles.headerLink} href="">Sobre</a>
                <a className={styles.headerLink} href="">Stack</a>
                <a className={styles.headerLink} href="">Projetos</a>
            </div>
            <button className="btn">Contato</button>
        </header>
    )
}