import MensagenSystem from "../../Components/Layout/MensagenSystem"
import {useLocation} from "react-router-dom"
import styles from "./projects.css"
import Container from "../../Components/Layout/Container"
import LinkButton from "../../Components/Button/LinkButton"
import ProjectsCards from "../../Components/ProjectsCards"
import React, { useState, useEffect } from "react"
import GetMethod from "../../Components/RequestApi/GetMethod"


function Projects() {
    const [projects, setProjects] = useState([])

    const date =  GetMethod("projects", "GET")
    console.log()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)

    }, [date])
    
    const location = useLocation()
    let message = ""
    if(location.state){
        message = location.state.message
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

            <Container>
                {loading 
                ? ( "carregando...") 
                : (date.length > 0 &&(
                        date.map((element) => {
                            return ( 
                            <ProjectsCards 
                            key={element.id}
                            name ={element.name}
                            budget={element.budget}
                            category={element.category.name} /> )

                        })
                    )
                )}
                
                
            </Container>
       </div>
    )
}

export default Projects