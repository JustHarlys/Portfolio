function Skills({ logo, tech, svg }) {
  return (
      <div className="course-container">
          {svg ? (
            <img src={svg} alt={tech} className="course-icon" />
          ) : (
            <i className={logo}></i>
          )}
          <p>{tech}</p>
      </div>
  );
}

export default Skills;
