import LOGO from '../../assets/logo.png'
import '../../styles/header.css'

function Header() {

    return (
        <nav>

            <img className='Header-img' src={LOGO} alt='logo' />
            <div className = 'Header'>
                <p>Accueil</p>
                <p>Profil</p>
                <p>Réglage</p>
                <p>Communauté</p>
            </div>       
        </nav>
    )
}
  
  export default Header
  