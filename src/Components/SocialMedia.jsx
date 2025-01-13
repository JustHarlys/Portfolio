
function SocialMedia({app, link}) {

  return (

        <a href={link}><i className={`social-links fa-brands ${app}`} ></i></a>
  )
}

export default SocialMedia