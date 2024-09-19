import Me from '../assets/me.jfif'
import links from '../data/links'
import Footer from './Footer'
import { nanoid } from 'nanoid'
import { DarkModeContext} from "../Context/DarkMode"
import { useContext } from "react"


function Hero() {

  const {darkModeToggle} = useContext(DarkModeContext)

  const footer = links.map(foot => {
    return <Footer 
    key={nanoid()}
    app={foot.app}
    link={foot.link}
    />
  })

  return (
    <main className="hero" style={{backgroundColor: darkModeToggle ? "white" : "black"}}>
      <img src={Me} alt="" className='hero-img'/>

      <div className="hero-text">
      <p className='hero-p' style={{color: darkModeToggle ? "black" : "white"}}>Mi nombre es <span className="name">Harlys Almánzar</span></p>
      <p className='hero-p-2' style={{color: darkModeToggle ? "black" : "white"}}> <span className="name">Full Stack Developer</span> en Republica Dominicana</p>
      
      <div className='social-media-hero'>
        {footer}
      </div>

      <div className="buttons">
      <button className='button cv'>Download CV</button>
      </div>

      </div>


    </main>
  )
}

export default Hero