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
import PropTypes from 'prop-types';


//get data by user id
function App() {

  const {userId} = useParams()
  const [user, setuserInfo] = useState(null)
  const [activity, setActivity] = useState(null)
  const [session, setSession] = useState(null)
  const [performance, setPerformance] = useState(null)


  useEffect(() => {
     
   const service = new Service()
      setuserInfo(service.getuserInfo(userId))

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


                  <Session key={session.userId} session={session} />

               
               <Performance performance={performance} />

               {Object.values(user).map((score) => 
                   <Score key={score.id} score={score} />
               )}
            </div> 
        </div>  
    </div>
      
   ):<></>
}

export default App