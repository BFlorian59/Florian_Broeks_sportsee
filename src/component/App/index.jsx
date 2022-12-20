import ComponentDidMount  from '../../Service'
import '../../styles/activity.css'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import User from '../User'
import Stat from '../Stat'
import Activity from '../Activity'
import Session from '../Sessions'
import Score from '../Score'
import Performance from '../Performance'

function App() {

  const {userId} = useParams()
  const [data, setUsers] = useState(null)
  const [activity, setActivity] = useState(null)
  const [session, setSession] = useState(null)
  const [performance, setPerformance] = useState(null)


  useEffect(() => {
     const user = new ComponentDidMount()
      user.getuserID(userId)
      setUsers(user.getuserID(userId))
  }, [userId]);

  useEffect(() => {
    const user_18_activity = new ComponentDidMount()
    user_18_activity.getuserActivity(userId)
    setActivity(user_18_activity.getuserActivity(userId))
  }, [userId]);

  useEffect(() => {
    const user_18_sessions = new ComponentDidMount()
    user_18_sessions.getuserSession(userId)
    setSession(user_18_sessions.getuserSession(userId))
  }, [userId]);

  useEffect(() => {
    const user_18_performance = new ComponentDidMount()
    user_18_performance.getuserPerformance(userId)
    setPerformance(user_18_performance.getuserPerformance(userId))
  }, [userId]);

   return data && activity && session && performance !== null?  (
      <div className="posts-container">
         {Object.values(data).map((user) => 
            <div className='titre' key={user.id}>
               <User firstname={user.userInfos.firstName}/>
            </div>  
         )}
         <div className='stat' >
            {Object.values(data).map((user) => 
               <Stat key={user.id} calorieCount={user.keyData.calorieCount} proteinCount={user.keyData.proteinCount}
                  carbohydrateCount={user.keyData.carbohydrateCount}  lipidCount={user.keyData.lipidCount} />
               
            )}
            <div className='graph'>
               {Object.values(activity).map((activitys) => 
                  <Activity key={activitys.userId} activity={activitys.sessions} />
                )}

               {Object.values(session).map((ses) => 
                  <Session key={ses.userId} session={ses.sessions} />
               )}

               {Object.values(performance).map((perf) => 
                  <Performance key={perf.userId} performance={perf.data} kind={perf.kind} />
               )}

               {Object.values(data).map((score) => 
                  <Score key={score.id} score={score} />
               )}
            </div> 
        </div>  
    </div>
      
   ):<></>
}

export default App