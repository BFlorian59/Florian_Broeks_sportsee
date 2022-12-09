import { useEffect } from 'react'

function ComponentDidMount() {


    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('http://localhost:3000/user/12')
            .then(response => response.json())
            .then((data) => {
                // Work with JSON data here
                
                console.log(data);
                return data;
            })
        fetch('http://localhost:3000/user/18')
            .then(response => response.json())
            .then((data) => {
                // Work with JSON data here
                
                console.log(data);
                return data;
            })    

    }, []);


}

export default ComponentDidMount



