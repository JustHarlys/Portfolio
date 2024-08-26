import './App.css'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import AboutMe from './Components/AboutMe'
import Education from './Components/Education'
import education from '../education'
import { nanoid } from 'nanoid'

const courses = education.map(course => {
  return <Education 
  key={nanoid()} 
  startYear={course.startYear}
  endYear={course.endDate}
  course={course.course}
  place={course.place}
  />
})

function App() {



  return (
    <>
    <Nav />
    <Hero />
    <AboutMe />
    <h1 className="education-h1">Educación</h1>
    <main className="education-container">
    {courses}
    </main>
    </>
  )
}

export default App
