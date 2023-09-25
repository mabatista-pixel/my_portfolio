import { DefaultTemplate } from "../../components/DefaultTemplate"
import { BannerSection } from "../../components/BannerSection"
import { AboutMeSection } from "../../components/AboutMeSection"
import { ProjectsSection } from "../../components/ProjectsSection"
import { TechSection } from "../../components/TechSection"

export const LandingPage = () => {
    return (
        <>
            <DefaultTemplate>
                <BannerSection />
                <AboutMeSection />
                <TechSection />
                <ProjectsSection />
            </DefaultTemplate>
        </>
    )
}








