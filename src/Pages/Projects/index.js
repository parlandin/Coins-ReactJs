import MensagenSystem from "../../Components/Layout/MensagenSystem"
import {useLocation} from "react-router-dom"
import styles from "./projects.css"
import Container from "../../Components/Layout/Container"
import LinkButton from "../../Components/Button/LinkButton"
import ProjectsCards from "../../Components/ProjectsCards"
import React, { useState, useEffect } from "react"
import GetMethod from "../../Components/RequestApi/GetMethod"
import Loading from "../../Components/Layout/Loading"
import PostMethod from "../../Components/RequestApi/PostMethod"

function Projects() {
    const [projects, setProjects] = useState([])
    
    const [loading, setLoading] = useState(true)
    const date =  GetMethod("projects", "GET")
    const [dataBase, setDataBase] = useState(date)


    useEffect(() => {
        setDataBase((currentValue) => {
            if(currentValue.length < 1){
                return date
            } else {
                return dataBase
            }
        })
        console.log("atualizou:", dataBase )
        //simulação carregamento
        const timer = setTimeout(() => {
            setLoading(false)
        },300)

        return ()=> clearTimeout(timer) 

    }, [date])
    


    const [projectMessage, setProjectMessage] = useState("")

    const location = useLocation()
    let message = ""
    if(location.state){
        message = location.state.message
    }


    function RemoveProjects(id){
        PostMethod(`projects/${id}`, "DELETE")
        setDataBase((currentValue) => currentValue.filter((element) => element.id != id))
        setProjectMessage("Projeto Removido com sucesso!")

        
        const time = setTimeout(()=> {
            setProjectMessage("")
        }, 1000)
        return ()=> clearTimeout(time)
    }


    return(
       <div className="project_container">
           <div className="title_container"> 
            <h1>Meus Projetos</h1>
            <LinkButton to="/newproject" text="Criar Projeto" />
           </div>
           
           {message && 
                <MensagenSystem type={"success"} msg={message} />
            }

            {projectMessage && 
                <MensagenSystem type={"success"} msg={projectMessage} />
            }


            <Container CustomClass="start">
                {loading 
                ? ( <Loading />) 
                : (dataBase.length > 0 &&(
                        dataBase.map((element) => {
                            return ( 
                            <ProjectsCards 
                            key={element.id}
                            id = {element.id}
                            name ={element.name}
                            budget={element.budget}
                            category={element.category.name}
                            handleRemove={RemoveProjects} /> )
                        })
                    )
                )}  
                
            {!loading && dataBase.length ===0 &&
                (<p>Não há projetos cadastrados.</p>)
            }
            </Container>
       </div>
    )
}

export default Projects