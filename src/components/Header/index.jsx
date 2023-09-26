import styles from "./style.module.css"

export const Header = () => {
    return(
        <header className={styles.flexbox}>
            <img className={styles.imgLogo} src="src/assets/portfolio.png" alt="Imagem Logo" />
            <div className={styles.clickable}>
                <a className={styles.headerLink} href="">Sobre</a>
                <a className={styles.headerLink} href="">Stack</a>
                <a className={styles.headerLink} href="">Projetos</a>
            </div>
            <button className="btn">Contato</button>
        </header>
    )
}