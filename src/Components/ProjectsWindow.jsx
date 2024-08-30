function ProjectsWindow({concept, link, title, github, img, description}) {

  return (

    <>


    <div className="projects-windows-container">
      <img src={img} alt="Imagen de Proyecto" className="project-window-img"/>
      <h1 className="project-title">{title}</h1>
      <p className="project-concept">{concept}</p>
      <p className="project-description">{description}</p>

      <div className="links-container">

      <div className="button-content">
            <a href={github} className='overlay-btn' target='_blank'><i className="fa-brands fa-github"></i></a>
            <p className='button-text'>Repositorio</p>
      </div>

      <div className="button-content">
            <a href={link} className='overlay-btn' target='_blank'><i className="fa-solid fa-globe"></i></a>
            <p className='button-text'>{link = link === "" ? "No disponible" : "Website" }</p>
      </div>

      </div>

    </div>
    </>
  )
}

export default ProjectsWindow