import { DefaultTemplate } from "../../components/DefaultTemplate"
import { BannerSection } from "../../components/BannerSection"
import { AboutMeSection } from "../../components/AboutMeSection"
import { ProjectsSection } from "../../components/ProjectsSection"
import { TechSection } from "../../components/TechSection"
import { technologies } from "../../data/technologies.js";
import { projects }    from "../../data/projects.js"

export const LandingPage = () => {
    return (
        <>
            <DefaultTemplate>
                <BannerSection />
                <AboutMeSection />
                <TechSection technologies={technologies} />
                <ProjectsSection projects={projects} />
            </DefaultTemplate>
        </>
    )
}








