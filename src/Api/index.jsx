import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import User from '../component/User'
import Stat from '../component/Stat'
import Activity from '../component/Activity'
import Session from '../component/Sessions'

function ComponentDidMount() {

    const [data, setPosts] = useState(null);
    const { userId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}`)
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setPosts(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, [userId]);

     const [activity, setActivity] = useState(null);
     useEffect(() => {
         fetch(`http://localhost:3000/user/${userId}/activity`)
            .then((response) => response.json())
            .then((activity) => {
               console.log(activity);
               setActivity(activity);
            })
            .catch((err) => {
               console.log(err.message);
            });
      }, [userId]);

      const [session, setSession] = useState(null);
      useEffect(() => {
            fetch(`http://localhost:3000/user/${userId}/average-sessions`)
               .then((response) => response.json())
               .then((session) => {
                  console.log(session);
                  setSession(session);
               })
               .catch((err) => {
                  console.log(err.message);
               });
         }, [userId]);

    return data && activity && session !== null?  (
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
            </div> 
         </div>  
      </div>
      
   ):<></>
}

export default ComponentDidMount