/**
 * Component Performance of the User.
 * @component
 * @param {object} performance - Data Performance of the user.
 * @returns {HTMLElement} - The performance graphic of the user
 */

import { Radar, RadarChart, PolarGrid, PolarAngleAxis} from 'recharts';
import PropTypes from 'prop-types';
import {useState,useEffect} from 'react'

//display graphical Performance of the user
function Performance({performance}) {
  const [data,setData]= useState(performance.data.data);
  const [kind,setKind]= useState(performance.data.kind);

  useEffect(()=>{

    let tab = [...data];
    for(let i =0; i<data.length;i++){  
      tab[i].valeur = kind[data[i].kind];
    }
    setData(tab);
  },[])
 
  console.log(data)

  return (
    <div className='performance'>
      <RadarChart
        width={313} 
        height={230}
        cx={138}
        data={data}
        text-align='center'
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="valeur" data={kind} name={kind} key={kind} />
        <Radar
          dataKey="value"
          stroke="#FF0101B2"
          fill="#FF0101B2"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
}

Performance.propTypes = {
  
  /**
   * User's performance
   */
  performance: PropTypes.object.isRequired
}

export default Performance