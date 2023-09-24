export const ProjectsSection = ({projects}) => {
    return(
        <section>
            <h2>Projetos</h2>
            <ul>
                {projects.map(project => {
                    return(
                        <li key={project.name}>
                            <div>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <a href="">Saiba mais</a>
                            </div>
                            <img src="src/assets/github-icon.png" alt="Logo Github" />
                        </li>
                    )
                })}
            </ul>
        </section>
    )

}