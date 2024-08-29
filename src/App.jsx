import './App.css'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import AboutMe from './Components/AboutMe'
import Education from './Components/Education'
import education from './data/education'
import Projects from './Components/Projects'
import projects from './data/projects'
import { nanoid } from 'nanoid'
import { useState } from 'react'



function App() {

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
  )
}

export default App
