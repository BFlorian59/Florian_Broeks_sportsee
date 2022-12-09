import { useEffect, useState } from 'react'

function ComponentDidMount() {

    const [data, setData] = useState(null);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('http://localhost:3000/user/12')
        .then((response) => response.json())
        .then((actualData) => {
            setData(actualData);
          })
  
    }, []);
    console.log(data)
    // return (
    //     <div className="card text-center m-3">
    //         <ul className='logement-list'>
    //             {data.map(({id, userInfos}) =>
               
    //                 <div className='card' key={id}>
    //                     <p className="titre">{userInfos}</p>
    //                 </div>
                 
    //             )}
    //         </ul>
    //     </div>
    // )
}

export default ComponentDidMount



