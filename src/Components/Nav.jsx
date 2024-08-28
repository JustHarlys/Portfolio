function Nav({darkModeToggle, handleDarkModeToggle, changePages, handleHome, handleProjects}) {


  return (
    <>
    <div className="nav-container">

        <p className="logo-text">HARLYS</p>
        <ul className="nav-items">
            <li className="nav-item" onClick={handleProjects} style={{color: !changePages ? 'gray' : 'red'}}>Home</li>
            <li className="nav-item" onClick={handleHome
              
            } style={{color: changePages ? 'gray' : 'red'}}>Projects</li>
            <button 
            className="toggle-button" 
            onClick={handleDarkModeToggle}
            style={{color: darkModeToggle ? 'red' : 'white'}}
            >{"</>"}</button>

        </ul>
    </div>
    </>
  )
}

export default Nav