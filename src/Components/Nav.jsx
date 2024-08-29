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

            <div className="icon-container">
            <button 
            className={darkModeToggle ? 'toggle-button-dark button-toggle' : 'toggle-button-light button-toggle'}  
            onClick={handleDarkModeToggle}
            style={{color: darkModeToggle ? 'rgb(230, 71, 71)' : 'white'}}
            >{darkModeToggle ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}</button>
            </div>

        </ul>
    </div>
    </>
  )
}

export default Nav