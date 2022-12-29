import Service  from '../../Service'
import '../../styles/activity.css'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import User from '../User'
import Stat from '../Stat'
import Activity from '../Activity'
import Session from '../Sessions'
import Score from '../Score'
import Performance from '../Performance'


//get data by user id
function App() {

  const {userId} = useParams()
  const [user, setUsers] = useState(null)
  const [activity, setActivity] = useState(null)
  const [session, setSession] = useState(null)
  const [performance, setPerformance] = useState(null)


  useEffect(() => {
     
   const service = new Service()
      setUsers(service.getuserID(userId))

      setActivity(service.getuserActivity(userId))

      setSession(service.getuserSession(userId))

      setPerformance(service.getuserPerformance(userId))
  }, [userId]);

   //call component
   return user && activity && session && performance !== null?  (
      <div className="posts-container">
         {Object.values(user).map((users) => 
            <div className='titre' key={users.id}>
               <User firstname={users.userInfos.firstName}/>
            </div>  
         )}
         <div className='stat' >
            {Object.values(user).map((user) => 
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
                  <Performance key={perf.userId} performance={perf.data} kind={[perf.kind]} />
               )}

               {Object.values(user).map((score) => 
                   <Score key={score.id} score={score} />
               )}
            </div> 
        </div>  
    </div>
      
   ):<></>
}

export default App