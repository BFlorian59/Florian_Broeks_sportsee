import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import User from '../component/User'
import Stat from '../component/Stat'
import Activity from '../component/Activity'

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

    return data && activity !== null?  (
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
            {Object.values(activity).map((activitys) => 
               <Activity key={activitys.userId} activity={activitys.sessions} />
            )}
         </div>  
      </div>
      
   ):<></>
}

export default ComponentDidMount