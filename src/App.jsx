import "./styles/index.css"
import { BannerSection } from "./components/BannerSection"
import { Header } from "./components/Header"
import { AboutMeSection } from "./components/AboutMeSection"
import { TechSection } from "./components/TechSection"
import { technologies } from "./data/technologies"
import { projects } from "./data/projects.js"
import { ProjectsSection } from "./ProjectsSection"

function App() {

  return (
    <>
    <Header/>
    <BannerSection/>
    <AboutMeSection/>
    <TechSection technologies={technologies}/>
    <ProjectsSection projects={projects} />
    </>
  )
}

export default App
