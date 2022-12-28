/**
 * Represents a Performance of the User.
 * @param {array} performance - The Performance graph of the user.
 */

import { Radar, RadarChart, PolarGrid, PolarAngleAxis} from 'recharts';
import PropTypes from 'prop-types';

//display graphical Performance of the user
function Performance({performance, kind}) {
  console.log({kind})
  console.log({performance})
  return (
    <div className='performance'>
      <RadarChart
        width={278} 
        height={250}
        cx={125}
        data={performance}
        text-align='center'
      >
        <PolarGrid />
            <PolarAngleAxis dataKey="kind" data={kind} name={kind} key={kind} />
        {/* kind[kind] */}
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
  
}

export default Performance