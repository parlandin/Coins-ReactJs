

function PostMethod(endpoints, method, body) {
        fetch(`http://localhost:5000/${endpoints}`, {
        method: `${method}`,
        headers: {"content-Type": "application/json",},
        body: body
    })
        .then ((res) => res.json())
        .then((date) => {})
        .catch((err) => console.log(err))
        .finally(() => { 
            console.log("true mandou dados") })

    return 

}


export default  PostMethod