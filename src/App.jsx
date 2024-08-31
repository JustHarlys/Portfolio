import './App.css'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import AboutMe from './Components/AboutMe'
import Education from './Components/Education'
import education from './data/education'
import Projects from './Components/Projects'
import projectsWindows from "./data/projectsWindows"
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



  function handleDarkModeToggle() {
    setDarkModeToggle(prevDarkMode => !prevDarkMode)
  }


  return (
    <>
    <Nav 
    darkModeToggle={darkModeToggle} 
    handleDarkModeToggle={handleDarkModeToggle} 
    />
    <Hero darkModeToggle={darkModeToggle}/>
    <AboutMe darkModeToggle={darkModeToggle}/>


    <h1 className="education-h1" style={{backgroundColor: darkModeToggle ? "white" : "black"}}>Educación</h1>
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

export default App
