import React, {useState, useEffect} from "react"

import styles from "./project.css"
import Input from "../../Input/index."
import Select from "../../Select"
import SubmitButton from "../../Button/SubmitButton"

function ProjectForm( {btnText}) {
    
    const [categories, setCategories] = useState([])
    const [Loanding, setLoanding] = useState(false)
    

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {"content-Type": "application/json",}
    })
        .then ((res) => res.json())
        .then((date) => setCategories(date))
        .catch((err) => console.log(err))
        /* .finally( () => setLoanding(true)) */
    }, [])


    return (
    <form>
        <Input 
        type="text" 
        text="Nome do projeto" 
        name="name"
        placeholder="Insira o nome do projeto" />

        <Input 
        type="Number" 
        text="Orçamento do projeto" 
        name="budget"
        placeholder="Insira o orçamento do projeto" />
        
        {/* Loanding &&  */<Select name="category_id" text="Selecione a categoria" options={categories} />}

        <SubmitButton text={btnText} />
    </form>
    )
}

export default ProjectForm