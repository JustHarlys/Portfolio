function Education({startYear, endYear, course, place}) {
  return (
        <div className="course-container">
        <p className="dates">{startYear} - {endYear}</p> 
        <p>{course}</p>
        <p className="course-place">{place}</p>

        </div>
  )
}

export default Education