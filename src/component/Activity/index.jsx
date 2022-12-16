import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import '../../styles/activity.css'

function Activity({activity}) {
  
      return (
        <div className='activity'>
            <BarChart
                width={835}
                height={320}
                data={activity}
            >
                <title>egrg</title>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top"  align="right"/>
                <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30"/>
                <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" />
          </BarChart>
        </div>

       
      );
}
export default Activity