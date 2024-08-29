function Nav({darkModeToggle, handleDarkModeToggle, changePages, handleHome, handleProjects}) {


  return (
    <>
    <div className="nav-container" style={{backgroundColor: darkModeToggle ? "white" : "black"}}>

        <p className="logo-text">HARLYS</p>
        <ul className="nav-items">

            <li className="nav-item" onClick={handleProjects} style={
              darkModeToggle 
              ? {color: !changePages ? 'gray' : 'rgb(230, 71, 71)'}
              : {color: !changePages ? 'white' : 'rgb(230, 71, 71)'}}>Home
            </li>

            <li className="nav-item" onClick={handleHome} style={
              darkModeToggle
              ? {color: changePages ? 'gray' : 'rgb(230, 71, 71)'}
              : {color: changePages ? 'white' : 'rgb(230, 71, 71)'}}>Projects
            </li>

            <button 
            className="toggle-button" 
            onClick={handleDarkModeToggle}
            style={{color: darkModeToggle ? 'rgb(230, 71, 71)' : 'white'}}
            >{"</>"}</button>

        </ul>
    </div>
    </>
  )
}

export default Nav