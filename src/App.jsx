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
  />
})

function App() {

  const [darkModeToggle, setDarkModeToggle] = useState(true)

  function handleDarkModeToggle() {
    setDarkModeToggle(prevDarkMode => !prevDarkMode)
  }

  return (
    <>
    <Nav darkModeToggle={darkModeToggle} handleDarkModeToggle={handleDarkModeToggle}/>
    <Hero />
    <AboutMe />


    <h1 className="education-h1">Educación</h1>
    <main className="education-container">
    {courses}
    </main>

    <div className="project-h1-container">
    <h1 className='projects-h1'>Proyectos</h1>
    <a href=""><p className="ver-mas">Ver más</p></a>
    </div>
    <div className="projects-container">
    {proyectos}
    </div>
    </>
  )
}

export default App
