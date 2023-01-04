/**
 * Component User's session time.
 * @component
 * @param {object} session - Data User's session time.
 * @param {object} payload - The data of the session's dot of the user.
 * @returns {HTMLElement} - The session graphic of the user
 */

import { LineChart,  XAxis, Tooltip, Line} from 'recharts';
import PropTypes from 'prop-types';
import {useState,useEffect} from 'react'

//display graphical session
function Session({session}) {
  const jour={1:'L', 2:'M',3:'M',4:'J',5:'V', 6:'S', 7:'D',}
  const [data,setData]= useState(session.data.sessions);
  
  useEffect(()=>{

    let tab = [...data];
    for(let i =0; i<data.length;i++){  
      tab[i].valeur = jour[data[i].day];
    }
    setData(tab);
  },[])

  const CustomTooltip = ({payload}) => {
    if (payload && payload.length) {
      return (
        <div className="custom-tooltip-session">
          <p className="min">{`${payload[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
  };
  
  return (
    <div className='session'>
      <p  className='titre'>Durée moyenne des sessions</p>
      <LineChart title="Chart of PU x UV"
        width={264}
        height={263}
        data={data}
        background-color="#FF0000"
      >
        <XAxis type='category' dataKey="valeur" fill="#D8D8D8" stroke="#D8D8D8" />
        <Tooltip width= '23%' wrapperStyle={{backgroundColor:'white', color:"black", textAlign:'center', fontSize:'100%'}} content={<CustomTooltip />}/>
        <Line type="monotone" activeDot={{ stroke: '#FFFFFF33', strokeWidth: 12, r: 5 }} fontFamily='200' dataKey="sessionLength" dot={false} stroke="#D8D8D8" fill="#FF0000" />
      </LineChart>
    </div>
  );
}

Session.propTypes = {
  /**
    * User's session time
  */
  session: PropTypes.object.isRequired
}

export default Session