import React, {useState, useEffect} from "react"

import styles from "./project.css"
import Input from "../../Input/index."
import Select from "../../Select"
import SubmitButton from "../../Button/SubmitButton"

import GetMethod from "../../RequestApi/GetMethod"

function ProjectForm( {btnText, handleSubmit, projectData}) {
    
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || "")

    const dados =  GetMethod("categories", "GET")

    const Submit = (e) => {
        e.preventDefault()
       
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e){
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }})
       
    }


   

    return (
    <form onSubmit={Submit}>
        <Input 
        type="text" 
        text="Nome do projeto" 
        name="name"
        placeholder="Insira o nome do projeto" 
        handleOnChange={handleChange} 
        value={project.name ? project.name : ""} />

        <Input 
        type="Number" 
        text="Orçamento do projeto" 
        name="budget"
        placeholder="Insira o orçamento do projeto"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ""} />
        
        {<Select name="category_id" 
        text="Selecione a categoria" 
        options={dados}
        handleOnChange={handleCategory} 
        value={project.category ? project.category.id : ""}/>}

        <SubmitButton text={btnText} />
    </form>
    )
}

export default ProjectForm