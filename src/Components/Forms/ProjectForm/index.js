import React, {useState, useEffect} from "react"

import styles from "./project.css"
import Input from "../../Input/index."
import Select from "../../Select"
import SubmitButton from "../../Button/SubmitButton"

import RequestApi from "../../RequestApi"

function ProjectForm( {btnText, handleSubmit, projectData}) {
    
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || [])

    const dados =  RequestApi("categories", "GET")

    const Submit = (e) => {
        e.preventDefault()
        console.log(project)
        handleSubmit(project)
    }

    function handleChange(e){
        console.log(project)
        setProject({...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e){
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }})
        console.log(project)
    }

    return (
    <form onSubmit={Submit}>
        <Input 
        type="text" 
        text="Nome do projeto" 
        name="name"
        placeholder="Insira o nome do projeto" 
        handleOnChange={handleChange} />

        <Input 
        type="Number" 
        text="Orçamento do projeto" 
        name="budget"
        placeholder="Insira o orçamento do projeto"
        handleOnChange={handleChange} />
        
        {<Select name="category_id" 
        text="Selecione a categoria" 
        options={dados}
        handleOnChange={handleCategory}
         />}

        <SubmitButton text={btnText} />
    </form>
    )
}

export default ProjectForm