import { DarkModeContext} from "../Context/DarkMode"
import { useContext } from "react"

function AboutMe() {

  const {darkModeToggle} = useContext(DarkModeContext)

  return (
    <main className="about-me-container" style={{backgroundColor: darkModeToggle ? "white" : "black"}}>

    <h1 className="about-me-h1">Sobre Mi</h1>
    <p className="about-me-p" style={{color: darkModeToggle ? "black" : "white"}}>
      Mi nombre es Harlys Almánzar,
      nací en la Republica Dominicana,
      me dedico a la creación y desarrollo de páginas web desde 2023.
      Estudio la carrera de Ingeniería de Software desde el 2020.
      <br />
      <br />
      </p>
    </main>
  )
}

export default AboutMe