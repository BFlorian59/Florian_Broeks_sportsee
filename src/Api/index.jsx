import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import User from '../component/User'

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
    return data !== null?  (
      <div className="posts-container">
         {Object.values(data).map((user) => 
            <div className='titre' key={user.id}>
               <User lastname={user.userInfos.lastName} firstname={user.userInfos.firstName} calorieCount={user.keyData.calorieCount} proteinCount={user.keyData.proteinCount}
               carbohydrateCount={user.keyData.carbohydrateCount}  lipidCount={user.keyData.lipidCount} />
            </div>      
         )}
      </div>
   ):<></>
}

export default ComponentDidMount