import { AreaChart,  XAxis, YAxis, CartesianGrid, Tooltip, Area} from 'recharts';

function Session({session}) {
  
      return (
        <div className='session'>
            <AreaChart
                width={500}
                height={400}
                data={session}
                background-color="#FF0000"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sessionLength" stroke="#D8D8D8" fill="#FF0000" />
        </AreaChart>
        </div>

       
      );
}
export default Session