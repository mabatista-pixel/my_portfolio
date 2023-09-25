export const ProjectsSection = ({projects}) => {
    return(
        <section>
            <h2 className="title2">Projetos</h2>
            <ul>
                {projects.map(project => {
                    return(
                        <li key={project.name}>
                            <div>
                                <h3 className="title3">{project.name}</h3>
                                <p className="paragraph">{project.description}</p>
                                <a className="link" href="">Saiba mais</a>
                            </div>
                            <img src="src/assets/github-icon.png" alt="Logo Github" />
                        </li>
                    )
                })}
            </ul>
        </section>
    )

}