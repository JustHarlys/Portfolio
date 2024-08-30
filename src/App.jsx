import './App.css'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import AboutMe from './Components/AboutMe'
import Education from './Components/Education'
import education from './data/education'
import Projects from './Components/Projects'
import projects from './data/projects'
import ProjectsWindow from './Components/ProjectsWindow'
import projectsWindows from "./data/projectsWindows"
import Footer from './Components/Footer'
import links from './data/links'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

function App() {

  useEffect(() => {
    if (!darkModeToggle) {
      document.body.classList.add('darkHome')
    } else {
      document.body.classList.remove('darkHome')
    }
  })

  const [changePages, setChangePages] = useState(true)

  const [darkModeToggle, setDarkModeToggle] = useState(true)

  const courses = education.map(course => {
    return <Education 
    key={nanoid()} 
    startYear={course.startYear}
    endYear={course.endDate}
    course={course.course}
    place={course.place}
    
    />
  })
  
  const proyectos = projects.map(proyecto => {
    return <Projects 
    key={nanoid()}
    title={proyecto.title}
    concept={proyecto.concept}
    link={proyecto.link}
    img={proyecto.img}
    github={proyecto.github}
    darkModeToggle={darkModeToggle}
    />
  })

  const proyectosWindow = projectsWindows.map(proyectoWindow => {
    return <ProjectsWindow 
    key={nanoid()}
    title={proyectoWindow.title}
    concept={proyectoWindow.concept}
    link={proyectoWindow.link}
    img={proyectoWindow.img}
    github={proyectoWindow.github}
    description={proyectoWindow.description}
    darkModeToggle={darkModeToggle}
    />
  })

  const footer = links.map(foot => {
    return <Footer 
    key={nanoid()}
    app={foot.app}
    link={foot.link}
    name={foot.name}
    />
  })



  function handleDarkModeToggle() {
    setDarkModeToggle(prevDarkMode => !prevDarkMode)
  }

  function handleHome() {
    setChangePages(false)
  }

  function handleProjects() {
    setChangePages(true)
  }

  return (

    
    <>
    <Nav 
    darkModeToggle={darkModeToggle} 
    handleDarkModeToggle={handleDarkModeToggle} 
    changePages={changePages}
    handleHome={handleHome}
    handleProjects={handleProjects}
    />

    {
      changePages ?
      <> 
      
      <Hero darkModeToggle={darkModeToggle}/>
    <AboutMe darkModeToggle={darkModeToggle}/>


    <h1 className="education-h1" style={{backgroundColor: darkModeToggle ? "white" : "black"}}>Educación</h1>
    <main className="education-container" style={{backgroundColor: darkModeToggle ? "white" : "black"}}>
    {courses}
    </main>

    <div className="project-h1-container" style={{backgroundColor: darkModeToggle ? "white" : "black"}}>
    <h1 className='projects-h1'>Proyectos</h1>
    <a href=""><p className="ver-mas">Ver más</p></a>
    </div>
    <div className="projects-container" style={{backgroundColor: darkModeToggle ? "white" : "black"}}>
    {proyectos}
    </div>
      </>

      : 
      <>
      {proyectosWindow}
      </> 

}
{/* 

*/}
    
    </>
  )
}

export default App
