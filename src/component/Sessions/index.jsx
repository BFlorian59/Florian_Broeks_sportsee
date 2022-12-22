import { AreaChart,  XAxis, Tooltip, Area} from 'recharts';

function Session({session}) {

  const CustomTooltip = ({payload}) => {
    if (payload && payload.length) {
      return (
        <div className="custom-tooltip-session">
          <p className="kcal">{`${payload[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
  };
  
  return (
    <div className='session'>
      <p>Durée moyenne des sessions</p>
      <AreaChart
        width={264}
        height={263}
        data={session}
        background-color="#FF0000"
      >
        <XAxis dataKey="day" fill="#D8D8D8" stroke="#D8D8D8" />
        <Tooltip width= '23%' wrapperStyle={{backgroundColor:'white', color:"black", textAlign:'center', fontSize:'100%'}} content={<CustomTooltip />}/>
        <Area type="monotone" fontFamily='200' dataKey="sessionLength" stroke="#D8D8D8" fill="#FF0000" fillOpacity={1}/>
      </AreaChart>
    </div>
  );
}
export default Session