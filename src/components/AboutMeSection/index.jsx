import styles from "./style.module.css"

export const AboutMeSection = () => {
    return(
        <section className="container">
            <h2 className="title2" id={styles.aboutTitle}>Sobre mim</h2>
            <p className="paragraph" id={styles.aboutParagraph}>Desde criança um ávido leitor e entusiasta pelo mundo da tecnologia. Constantemente aprendendo novas coisas, habilidades e melhorando a si mesmo, tanto a nível pessoal como interpessoal e espiritual. Adepto da cultura biohacking. Auto-didata. Livre pensador. Desenvolvimento pessoal contínuo. Desenvolvedor Web Fullstack. Futuro Engenheiro de Software pela Universidade Positivo - Londrina.</p>
        </section>
    )
}
