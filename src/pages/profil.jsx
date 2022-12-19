import '../styles/profil.css'
import Nav from '../component/Nav_vertical';
import ComponentDidMount  from '../Service'
import '../styles/profil.css'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

function Profil() {

  const {userId} = useParams()

  
     useEffect(() => {
        let user = new ComponentDidMount()
        user.getuserID(userId)
      }, [userId]);


  return (
    <div className='contenu'>
      <Nav /> 
  
    </div>
  )
}

export default Profil