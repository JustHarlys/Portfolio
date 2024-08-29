function ProjectsWindow(props) {

  return (
    <main className="projects-windows-container">



      <p>{props.img}</p>
      <h1>{props.title}</h1>
      <p>{props.concept}</p>
      <p>{props.description}</p>
      <a href={props.github} className='overlay-btn' target='_blank'><i className="fa-brands fa-github"></i></a>
      <a href={props.link} className='overlay-btn' target='_blank'><i className="fa-solid fa-globe"></i></a>

    </main>
  )
}

export default ProjectsWindow