import styles from "./serviceform.css"
import React, {useState} from "react"
import Input from "../../Input/"
import SubmitButton from "../../Button/SubmitButton"


function ServiceForm({handleSubmit, btnText, projectData}){
    const [listService, setListeService] = useState(projectData.services)
    const [service, setService] = useState({})

    function submit(e){
        e.preventDefault()
        setListeService([...listService, service])
        projectData.services = listService
        handleSubmit(projectData)
    }

    function handleChange(e){
        setService({...service, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit}>
            <Input 
            type="text"
            text= "nome do serviço"
            name="name"
            placeholder="Insira o nome do serviço"
            handleOnChange={handleChange} />

            <Input 
            type="number"
            text= "Custo do serviço"
            name="cost"
            placeholder="Insira o nome valor total"
            handleOnChange={handleChange} />

            <Input 
            type="text"
            text= "Descrição do serviço"
            name="description"
            placeholder="Descreva o serviço"
            handleOnChange={handleChange} />  
             <SubmitButton text={btnText} />
        </form>

    )
}

export default ServiceForm