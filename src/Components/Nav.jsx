import { DarkModeContext} from "../Context/DarkMode"
import { useContext } from "react"

function Nav() {

  const{darkModeToggle, handleDarkModeToggle} = useContext(DarkModeContext)

  return (
    <>
    <div className="nav-container" style={{backgroundColor: darkModeToggle ? "white" : "black"}}>

        <p className="logo-text">HARLYS</p>
        <ul className="nav-items">

            <li className="nav-item">Home</li>

          
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