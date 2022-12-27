/**
 * Represents a score of the User.
 * @param {object} score - The score graph of the user.
 */

import { RadialBarChart, RadialBar, PolarAngleAxis} from 'recharts';
import PropTypes from 'prop-types';


//display graphical score of the user
function Score({score}) {
  return (
    <div className='score'>
      <div>
        <p>Score</p>
      </div>
      <RadialBarChart width={263} height={264} data={[score]}
          innerRadius={250}
          barSize={10}
          startAngle={90}
          endAngle={450}
          
        >
        <PolarAngleAxis
        
          type="number"
          domain={[0, 10]}
          angleAxisId={0}
          tick={false}
        />
        
        <RadialBar
        // Condition dataKey
          dataKey="score"
          background
          fill="#FF0101B2"
        /> 

        <text
          x={125}
          y={100}
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
          width={2}
        >
          {score.score}
          % de votre objectif
        </text>
      </RadialBarChart>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.object
}
export default Score