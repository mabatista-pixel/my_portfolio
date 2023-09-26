import styles from "./style.module.css"
import gitIcon from "../../assets/git-icon.png"

export const ProjectsSection = ({projects}) => {
    return(
        <section className={styles.container}>
            <h2 className="title2">Projetos</h2>
            <ul className={styles.flexbox}>
                {projects.map(project => {
                    return(
                        <li className={styles.projectCard} key={project.name}>
                            <div className={styles.projectInfo}>
                                <h3 className="title3">{project.name}</h3>
                                <p className="paragraph">{project.description}</p>
                                <a className="link" href="">Saiba mais</a>
                            </div>
                            <img className={styles.projectImg} src={gitIcon} alt="Logo Github" />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}