import React, {useState, useEffect} from "react"


function GetMethod(endpoints, method) {

    const [dateResult, setDateResult] = useState([])
 

    useEffect(() => {
        fetch(`http://localhost:5000/${endpoints}`, {
        method: `${method}`,
        headers: {"content-Type": "application/json",},
    })
        .then ((res) => res.json())
        .then((date) => setDateResult(date))
        .catch((err) => console.log(err))
        .finally(() => {})

    }, [])

    
    return dateResult 

}


export default GetMethod