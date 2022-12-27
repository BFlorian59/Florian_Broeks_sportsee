import { Radar, RadarChart, PolarGrid, PolarAngleAxis} from 'recharts';
import PropTypes from 'prop-types';

//display graphical Performance of the user
function Performance({performance, kind}) {
  return (
    <div className='performance'>
      <RadarChart
        width={730} 
        height={250}
        cx={125}
        data={performance}
        text-align='center'
      >
        <PolarGrid />
        <PolarAngleAxis dataKey='kind' label={kind}/>
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
  performance: PropTypes.array,
  kind: PropTypes.object
}

export default Performance