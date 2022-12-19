import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import User from '../component/User'
import Stat from '../component/Stat'
import Activity from '../component/Activity'
import Session from '../component/Sessions'
import Performance from '../component/Performance'
import Score from '../component/Score'
import user from '../mock'
import '../styles/activity.css'
import env from '../.env'




export class ComponentDidMount {

   constructor(){
      this.env = true;
   }

   getuserID(userId){

      if (env) {
         return user
      }else{
         fetch(`http://localhost:3000/user/${userId}`)
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              return data;
           })
           .catch((err) => {
              console.log(err.message);
           });
      }  
   }


   getuserActivity(userId){

      if (env) {
         
      }else{
         fetch(`http://localhost:3000//user/${userId}/activity`)
           .then((response) => response.json())
           .then((activity) => {
              console.log(activity);
              return activity;
           })
           .catch((err) => {
              console.log(err.message);
           });
      }  
   }




   //  useEffect(() => {
   //      
   //   }, [userId]);

   //   const [activity, setActivity] = useState(null);
   //   useEffect(() => {
   //       fetch(`http://localhost:3000/user/${userId}/activity`)
   //          .then((response) => response.json())
   //          .then((activity) => {
   //             console.log(activity);
   //             setActivity(activity);
   //          })
   //          .catch((err) => {
   //             console.log(err.message);
   //          });
   //    }, [userId]);

   //    const [session, setSession] = useState(null);
   //    useEffect(() => {
   //       fetch(`http://localhost:3000/user/${userId}/average-sessions`)
   //          .then((response) => response.json())
   //          .then((session) => {
   //             console.log(session);
   //             setSession(session);
   //          })
   //          .catch((err) => {
   //             console.log(err.message);
   //          });
   //    }, [userId]);

   //    const [performance, setPerformance] = useState(null);
   //    useEffect(() => {
   //       fetch(`http://localhost:3000/user/${userId}/performance`)
   //          .then((response) => response.json())
   //          .then((performance) => {
   //             console.log(performance);
   //             setPerformance(performance);
   //          })
   //          .catch((err) => {
   //             console.log(err.message);
   //          });
   //    }, [userId]);

   //  return data && activity && session && performance !== null?  (
   //    <div className="posts-container">
   //       {Object.values(data).map((user) => 
   //          <div className='titre' key={user.id}>
   //             <User firstname={user.userInfos.firstName}/>
   //          </div>  
   //       )}
   //       <div className='stat' >
   //          {Object.values(data).map((user) => 
   //             <Stat key={user.id} calorieCount={user.keyData.calorieCount} proteinCount={user.keyData.proteinCount}
   //                carbohydrateCount={user.keyData.carbohydrateCount}  lipidCount={user.keyData.lipidCount} />
               
   //          )}
   //          <div className='graph'>
   //             {Object.values(activity).map((activitys) => 
   //                <Activity key={activitys.userId} activity={activitys.sessions} />
   //             )}

   //             {Object.values(session).map((ses) => 
   //                <Session key={ses.userId} session={ses.sessions} />
   //             )}

   //             {Object.values(performance).map((perf) => 
   //                <Performance key={perf.userId} performance={perf.data} kind={perf.kind} />
   //             )}

   //             {Object.values(data).map((score) => 
   //                <Score key={score.id} score={score} />
   //             )}
   //          </div> 
   //       </div>  
   //    </div>
      
   // ):<></>
}
