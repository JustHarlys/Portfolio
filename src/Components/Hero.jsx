import Me from '../assets/me.jfif'


function Hero() {
  return (
    <main className="hero">
      <img src={Me} alt="" className='hero-img'/>

      <div className="hero-text">
      <p className='hero-p'>Mi nombre es <span className="name">Harlys Almánzar</span></p>
      <p className='hero-p-2'> <span className="name">Full Stack Developer</span> en Republica Dominicana</p>
      
      <div className="buttons">
      <button className='button cv'>Download CV</button>
      <button className='button projects'>Projects</button>
      </div>
      
      </div>

    </main>
  )
}

export default Hero