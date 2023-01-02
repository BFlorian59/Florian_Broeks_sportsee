/**
 * Represents a session of the User.
 * @param {object} session - The session graph of the user.
 */

import { LineChart,  XAxis, Tooltip, Line} from 'recharts';
import PropTypes from 'prop-types';

//display graphical session
function Session({session}) {

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
        data={session}
        background-color="#FF0000"
      >
        <XAxis type='category' dataKey="day" fill="#D8D8D8" stroke="#D8D8D8" />
        <Tooltip width= '23%' wrapperStyle={{backgroundColor:'white', color:"black", textAlign:'center', fontSize:'100%'}} content={<CustomTooltip />}/>
        <Line type="monotone" activeDot={{ stroke: '#FFFFFF33', strokeWidth: 12, r: 5 }} fontFamily='200' dataKey="sessionLength" dot={false} stroke="#D8D8D8" fill="#FF0000" />
      </LineChart>
    </div>
  );
}

Session.propTypes = {
  payload: PropTypes.number,
}

export default Session