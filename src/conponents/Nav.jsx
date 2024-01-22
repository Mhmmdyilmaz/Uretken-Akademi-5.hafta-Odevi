function Nav(){
    return(
<nav>
      <div>
        <a href='https://uretkenakademi.com' target="_blank">
          <img style={{maxWidth:"250px", backgroundColor:"white", borderRadius:"5px", padding:"5px"}} src="./src/logo.jpg" alt="Üretken akademi"/>
        </a>
      </div>
      <span className="blur2"></span>
      <span className="blur2"></span>
      <ul style={{fontSize:'20px',}}>
        <a href="#"><li>Özgeçmiş</li></a>
        <a href="#"><li>Projelerim</li></a>
        <a href="#"><li>İletişim</li></a>
      </ul>
    </nav>
)
}
export default Nav