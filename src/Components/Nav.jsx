function Nav({darkModeToggle, handleDarkModeToggle}) {
  return (
    <>
    <div className="nav-container">

        <p className="logo-text">HARLYS</p>
        <ul className="nav-items">
            <li className="nav-item selected">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Projects</li>
            <li className="nav-item">Contact</li>
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