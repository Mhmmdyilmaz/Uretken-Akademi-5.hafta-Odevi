import Hakkimda from "./Hakkimda"
function Header(){
    return(
        <>
        <header className='container'>
      
      <div className="image">
      
      
          <img style={{
            width:'250px',
            borderRadius:'50%',
            border:'1px solid white',
            boxShadow:'0 0 1000px 0px #424753',
          }} src="./src/ben.jpg" alt="Ben"/>
        </div>
        <div className="col">
        
        <Hakkimda />
        
        <span style={{marginLeft:'300px', marginTop:'-100px'}} className="blur"></span>
        <span style={{marginLeft:'300px', marginTop:'-100px'}} className="blur"></span>
      </div>
    </header>
        </>
    )
}

export default Header