import { AreaChart,  XAxis, Tooltip, Area} from 'recharts';

function Session({session}) {
  
  return (
    <div className='session'>
      <AreaChart
        width={264}
        height={263}
        data={session}
        background-color="#FF0000"
      >
        <XAxis dataKey="day" fill="#D8D8D8" stroke="#D8D8D8" />
        <Tooltip />
        <Area type="monotone" dataKey="sessionLength" stroke="#D8D8D8" fill="#FF0000" fillOpacity={1}/>
      </AreaChart>
    </div>
  );
}
export default Session