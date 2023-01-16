/**
 * Component Activity of the User.
 * @component
 * @param {object} activity - The data activity of the user.
 * @param {object} payload - The data of the activity's bar of the user.
 * @returns {HTMLElement} - The activity graphic of the user
 */


import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import '../../styles/activity.css'
import PropTypes from 'prop-types';
import {format, parseISO} from "date-fns";

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
        <XAxis dataKey="day" tickFormatter={(str) => {
          const date = parseISO(str);
            return format(date, 'd');
          }}
        />
        <YAxis orientation='right' />
        <Tooltip wrapperStyle={{borderRadius:'5px',left:'2%', backgroundColor:'#E60000', color:"white", textAlign:'center', fontSize:'60%', padding: '1% 1%'}} content={<CustomTooltip />}/>
        <Legend margin={{top:-37, right:-37, bottom:-37, left:-37}}  iconType='circle' iconSize='10' verticalAlign="top"  align="right"/>
        <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]}/>
        <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
      </BarChart>
    </div>
  );
}
Activity.propTypes = { 
    /**
   * User's activity
   */
  activity: PropTypes.array.isRequired,
}

export default Activity