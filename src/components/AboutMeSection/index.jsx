import styles from "./style.module.css"

export const AboutMeSection = () => {
    return(
        <section className="container">
            <h2 className="title2" id={styles.aboutTitle}>Sobre mim</h2>
            <p className="paragraph" id={styles.aboutParagraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et aliquam veritatis, molestiae tenetur, numquam iusto excepturi earum illo sint esse tempora quasi aut. Tenetur dolore eum labore minus, eius natus.</p>
        </section>
    )
}