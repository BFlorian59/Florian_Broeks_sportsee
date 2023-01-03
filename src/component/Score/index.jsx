/**
 * Component a score of the User.
 * @component
 * @param {object} score - The score graph of the users.
 * @param {object} tabscore - The score graph by user.
 * @property {number}  tabscore.tabscores- The number of scores of the user.
 * @returns {HTMLElement} - The performance graphic of the user
 */

import { RadialBarChart, RadialBar, PolarAngleAxis} from 'recharts';
import PropTypes from 'prop-types';


//display graphical score of the user
function Score({score}) {
  let tabscore = null
  if(score.todayScore !== undefined){
    tabscore = {tabscores:score.todayScore}
  }
  else if(score.score !== undefined){
    tabscore = {tabscores:score.score}
  }
  return (
    <div className='score'>
      <div>
        <p>Score</p>
      </div>
      <RadialBarChart width={263} height={264} data={[tabscore]}
          innerRadius={250}
          barSize={10}
          startAngle={90}
          endAngle={450}
          background = {{ fill: "#FFFFFF"  }}
          barCategoryGap='200%'

        >
        <PolarAngleAxis
        
          type="number"
          domain={[0, 10]}
          angleAxisId={0}
          tick={false}
        />
        
        <RadialBar dataKey="tabscores"
          background = {{ fill: "#FFFFFF"  }}
          fill="#FF0101B2"/>
          
          
        <text
          x={125}
          y={100}
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-score"
          width={2}
          fill='#282D30'
        >
          {tabscore.tabscores}%
        </text>
        <text
          x={125}
          y={130}
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
          width={2}
          fill='#74798C'
        >
          de votre
        </text>

        <text
          x={125}
          y={150}
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
          width={2}
          fill='#74798C'
        > objectif
        </text>
      </RadialBarChart>
    </div>
            
  );
}

Score.propTypes = {
    /**
   * User's score
   */
  score: PropTypes.object.isRequired
}
export default Score