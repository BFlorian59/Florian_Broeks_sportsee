import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';


function Performance({performance, kind}) {
    return (
      <div className='performance'>
              <RadarChart
      cx={100}
      cy={50}
      outerRadius={150}
      width={258}
      height={263}
      data={performance}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey={kind}/>
      <PolarRadiusAxis />
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
export default Performance