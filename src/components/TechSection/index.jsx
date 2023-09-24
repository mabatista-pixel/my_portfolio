// import { TechCard } from "./TechCard"

export const TechSection = ({technologies}) => {
    return(
        <section>
            <h2>Tecnologias</h2>
            <ul>
                {technologies.map(tech => {
                    return(
                        <li key={tech.name}>
                            <img src={tech.img} alt={tech.name} />
                            <h3>{tech.name}</h3>
                        </li>
                    )
                })}
     
            </ul>
        </section>
    )
}