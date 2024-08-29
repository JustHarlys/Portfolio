import Me from '../assets/me.jfif'


function Hero({darkModeToggle}) {
  return (
    <main className="hero" style={{backgroundColor: darkModeToggle ? "white" : "black"}}>
      <img src={Me} alt="" className='hero-img'/>

      <div className="hero-text">
      <p className='hero-p' style={{color: darkModeToggle ? "black" : "white"}}>Mi nombre es <span className="name">Harlys Almánzar</span></p>
      <p className='hero-p-2' style={{color: darkModeToggle ? "black" : "white"}}> <span className="name">Full Stack Developer</span> en Republica Dominicana</p>
      
      <div className="buttons">
      <button className='button cv'>Download CV</button>
      <button className='button projects'>Projects</button>
      </div>
      
      </div>

    </main>
  )
}

export default Hero