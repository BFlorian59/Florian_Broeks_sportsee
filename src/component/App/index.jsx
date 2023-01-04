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

/**
 * Component App of the User.
 * @component
 * @param {object} users - Data recovery of User's firstname.
 * @param {object} user - Data recovery of User's calorie counts, protein counts , carbohydrate counts and lipid counts.
 * @param {object} activitys - Data recovery of User's activity.
 * @param {object} score - Data recovery of User's score.
 * @const {string} userId - Users' Id
 * @returns {HTMLElement} - The activity graphic of the user
 */

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

App.propTypes = { 
   /**
  * User's activity
  */
 activity: PropTypes.array,

   /**
   * User's performance
   */
   performance: PropTypes.object,

       /**
   * User's score
   */
   score: PropTypes.object,

     /**
    * User's session time
  */
  session: PropTypes.object,

   /**
     * User's calorie count
    */
   calorieCount: PropTypes.number,

   /**
   * User's carbohydrate count
  */
   carbohydrateCount: PropTypes.number,

   /**
   * User's lipid count
  */
   lipidCount: PropTypes.number,

   /**
   * User's protein count
  */
   proteinCount: PropTypes.number,

   /**
   * User's firstname
   */
   firstname: PropTypes.string

}
export default App