import Reac, {useState} from "react"

function PostMethod(endpoints, method, body) {

        fetch(`http://localhost:5000/${endpoints}`, {
        method: `${method}`,
        headers: {"content-Type": "application/json",},
        body: body
        })
            .then ((res) => res.json())
            .then(async (date) => {})
            .catch((err) => console.log(err))
        return []

}


export default  PostMethod