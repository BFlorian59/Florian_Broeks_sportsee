import '../styles/profil.css'
import Nav from '../component/Nav_vertical';
import Profile from '../Api'

function Profil() {
  return (
    <div className='contenu'>
        <Nav />
        <Profile />    
    </div>
  )
}

export default Profil