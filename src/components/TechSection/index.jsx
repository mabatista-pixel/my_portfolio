import styles from "./style.module.css"

export const TechSection = ({technologies}) => {
    return(
        <section className={styles.container}>
            <h2 className="title2">Tecnologias</h2>
            <ul className={styles.flexbox}>
                {technologies.map(tech => {
                    return(
                        <li className={styles.techCard} key={tech.name}>
                            <img className={styles.techImg} src={tech.img} alt={tech.name} />
                            <h3 className="title3" id={styles.techTitle}>{tech.name}</h3>
                        </li>
                    )
                })}
     
            </ul>
        </section>
    )
}