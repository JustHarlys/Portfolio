
function Projects({concept, link, title, github, img}) {
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
        <p className="project-title">{title}</p>
        <p className='project-concept'>{concept}</p>
    </div>

  )
}

export default Projects