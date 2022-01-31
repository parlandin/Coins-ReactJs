import React, {useState, useEffect} from "react"


function ResquestApi(endpoints, method, body={}) {

    const [dateResult, setDateResult] = useState([])
 

    useEffect(() => {
        fetch(`http://localhost:5000/${endpoints}`, {
        method: `${method}`,
        headers: {"content-Type": "application/json",},
        body: body.lenth > 0 ? body : null ,
    })
        .then ((res) => res.json())
        .then((date) => setDateResult(date))
        .catch((err) => console.log(err))
        .finally(() => { 
            console.log("true") })

    }, [])

    
    return dateResult 

}


export default ResquestApi