import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

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
    console.log(data)
    return data !== null?  (
        <div className="posts-container">
           {Object.values(data).map((post) => {
              return (
                 <div className="post-card" key={post.id}>
                    <div className="button">
                    <div className="delete-btn">{post.userInfos.firstName}</div>
                    </div>
                 </div>
              );
           })}
        </div>
        ):<></>
}

export default ComponentDidMount