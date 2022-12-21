import { RadialBarChart, RadialBar, PolarAngleAxis} from 'recharts';


function Score({score}) {
  return (
    <div className='score'>
      <RadialBarChart width={143} height={143} data={[score]}
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
          dataKey="score"
          fill="#FF0101B2"
          width="100%" height="100%" 
        />
        <text
          x={30 / 2}
          y={33 / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
        >
          Score
        </text>
      </RadialBarChart>
    </div>
  );
}
export default Score