import { useState } from "react"
import { DarkModeContext} from "../Context/DarkMode"
import { useContext } from "react"

function Projects({concept, link, title, github, img, description, linkRes}) {

  const {darkModeToggle} = useContext(DarkModeContext)

  const [details, setDetails] = useState(false)

  function handleDetails() {
    setDetails(prevState => !prevState)
  }

  return (
  
    <div className="project-container">
        <div className="project-img-wrapper">
        <img src={img} alt="Imagen de ejemplo" className='project-img' />

        <div className="overlay">

            <div className="button-content">
            <a href={link} className='overlay-btn' target='_blank'><i className="fa-solid fa-globe"></i></a>
            <p className='button-text'>{link = link === "" ? "No disponible" : "Website" }</p>
            </div>

            <div className="button-content">
            <a href={github} className='overlay-btn' target='_blank'><i className="fa-brands fa-github"></i></a>
            <p className='button-text'>Repositorio</p>
            </div>

        </div>
        </div>

        <div className="btn-responsive"> 

        <div className="button-content">

        <a href={linkRes} className='overlay-btn' target='_blank'><i className="fa-solid fa-globe globe-responsive" style={{color: darkModeToggle ? 'black' : 'white'}}></i></a>
        <p className='button-text text-responsive' style={{color: darkModeToggle ? "black" : "white"}}>{linkRes = linkRes === "" ? "No disponible" : "Website" }</p>
        </div>

        <div className="button-content">

        <a href={github} className='overlay-btn' target='_blank'><i className="fa-brands fa-github github-responsive" style={{color: darkModeToggle ? 'black' : 'white'}}></i></a>
        <p className='button-text text-responsive' style={{color: darkModeToggle ? "black" : "white"}}>Repositorio</p>
        </div>
        </div>



        <p className="project-title" style={{color: darkModeToggle ? "black" : "white"}}>{title}</p>
        <p className='project-concept' style={{color: darkModeToggle ? "black" : "white"}}>{concept}</p>
        {details && <p className="project-description" style={{color: darkModeToggle ? "black" : "white"}}>{description}</p>}


        <p style={{color: darkModeToggle ? "black" : "white", textDecoration: 'underline', cursor: 'pointer'}} onClick={handleDetails} >Ver más</p>

    </div>

  )
}

export default Projects