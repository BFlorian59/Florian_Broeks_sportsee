import '../styles/profil.css'
import Nav from '../component/Nav_vertical';
import ComponentDidMount  from '../Api'
import '../styles/profil.css'

function Profil() {
  return (
    <div className='contenu'>
      <Nav />
      <ComponentDidMount />      
    </div>
  )
}

export default Profil