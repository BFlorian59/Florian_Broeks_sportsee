import "../../styles/Footer.css"
import yoga from "../../assets/yoga.png"
import natation from "../../assets/natation.png"
import velo from "../../assets/velo.png"
import halthere from "../../assets/halthere.png"

function Nav() {

    return (
        <nav className="nav_vertical">
            <div className = 'nav'>
                <img className='nav-img' src={yoga} alt='logo' />
                <img className='nav-img' src={natation} alt='logo' />
                <img className='nav-img' src={velo} alt='logo' />
                <img className='nav-img' src={halthere} alt='logo' />
                <p>Copiryght, SportSee 2020</p>   
            </div>    
        </nav>
    )
}
  
  export default Nav