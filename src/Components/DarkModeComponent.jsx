import Nav from './Nav'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Skills from './Skills'
import skills from '../data/skills'
import Projects from './Projects'
import projectsWindows from "../data/projectsWindows"
import { nanoid } from 'nanoid'
import { useContext, useEffect} from 'react'
import { DarkModeContext } from '../Context/DarkMode'

export function DarkModeComponent() {
  const { darkModeToggle } = useContext(DarkModeContext)
  

  useEffect(() => {
    if (!darkModeToggle) {
      document.body.classList.add('darkHome')
    } else {
      document.body.classList.remove('darkHome')
    }
  }, [darkModeToggle])



  const courses = skills.map((course) => (
    <Skills 
        key={nanoid()} 
        tech={course.course} 
        logo={course.logo} 
        svg={course.svg} 
    />
));

  const proyectos = projectsWindows.map(proyectoWindow => {
    return <Projects
    key={nanoid()}
    title={proyectoWindow.title}
    concept={proyectoWindow.concept}
    link={proyectoWindow.link}
    linkRes={proyectoWindow.linkRes}
    img={proyectoWindow.img}
    github={proyectoWindow.github}
    description={proyectoWindow.description}
    darkModeToggle={darkModeToggle}
    />
  })

  return (
    
    <>
    <Nav/>
    <Hero/>
    <AboutMe/>


    <h1 className="education-h1" style={{backgroundColor: darkModeToggle ? "white" : "black"}}>Skills</h1>
    <main className="education-container" style={{backgroundColor: darkModeToggle ? "white" : "black"}}>
    {courses}
    </main>

    <div className="project-h1-container" style={{backgroundColor: darkModeToggle ? "white" : "black"}}>
    <h1 className='projects-h1'>Proyectos</h1>
    </div>
    <div className="projects-container" style={{backgroundColor: darkModeToggle ? "white" : "black"}}>
    {proyectos}
    </div>
    </>
  )

}

