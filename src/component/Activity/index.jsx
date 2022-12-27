/**
 * Represents a Activity of the User.
 * @param {array} activity - The activity graph of the user.
 */


import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import '../../styles/activity.css'
import PropTypes from 'prop-types';


//display activity Performance of the user
function Activity({activity}) {

  const CustomTooltip = ({payload}) => {
    if (payload && payload.length) {
      return (
        <div className="custom-tooltip-activity">
          <p className="poids">{`${payload[0].value} kg`}</p>
          <p className="kcal">{`${payload[1].value} KCal`}</p>
        </div>
      );
    }
  
    return null;
  };
    
  return (
    <div className='activity'>
      <p> Activité quotidienne</p> 
      <BarChart
        width={835}
        height={320}
        data={activity}
        barSize={10}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis/>
        <YAxis orientation='right' />
        <Tooltip wrapperStyle={{left:'2%', backgroundColor:'#E60000', color:"white", textAlign:'center', fontSize:'60%', padding: '1% 1%'}} content={<CustomTooltip />}/>
        <Legend margin={{top:-37, right:-37, bottom:-37, left:-37}}  iconType='circle' iconSize='10' verticalAlign="top"  align="right"/>
        <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30"/>
        <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" />
        <text
          x={75}
          y={10}
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
        >
        </text>
      </BarChart>
    </div>
  );
}
Activity.propTypes = {
  payload: PropTypes.number,
  activity: PropTypes.array,
}

export default Activity