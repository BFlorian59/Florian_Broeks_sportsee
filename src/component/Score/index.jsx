/**
 * Represents a score of the User.
 * @param {object} score - The score graph of the users.
 * @param {object} tabscore - The score graph by user.
 */

import { RadialBarChart, RadialBar, PolarAngleAxis} from 'recharts';
import PropTypes from 'prop-types';


//display graphical score of the user
function Score({score}) {
  let tabscore = null
  if(score.todayScore !== undefined){
    tabscore = {tabscores:score.todayScore};
    console.log(tabscore)
  }
  else if(score.score !== undefined){
    tabscore = {tabscores:score.score};
    console.log(tabscore)
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
          
        >
        <PolarAngleAxis
        
          type="number"
          domain={[0, 10]}
          angleAxisId={0}
          tick={false}
        />
        
        <RadialBar
          dataKey="tabscores"
          background = {{ fill: "#FFFFFF"  }}
          fill="#FF0101B2"
        /> 
        <text
          x={125}
          y={100}
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
          width={2}
          data ={tabscore}
        >
          {tabscore.tabscores}
          % de votre objectif
        </text>
      </RadialBarChart>
      <p>{tabscore.scores}</p>
    </div>
            
  );
}

Score.propTypes = {
  score: PropTypes.object
}
export default Score