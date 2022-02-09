import styles from "./project.css"
import {useParams} from "react-router-dom"
import React, {useState, useEffect} from "react"
import GetMethod from "../../Components/RequestApi/GetMethod"
import Loading from "../../Components/Layout/Loading"
import Container from "../../Components/Layout/Container"
import ProjectForm from "../../Components/Forms/ProjectForm"
import PostMethod from "../../Components/RequestApi/PostMethod"
import MensagenSystem from "../../Components/Layout/MensagenSystem"

function Project(){
    const  { id } = useParams()
    const date = GetMethod(`projects/${id}`, "GET")
    const [project, setProject] = useState([])
    const [loading, setLoading] = useState(true)
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')


    useEffect(()=> {
        setProject(date)

        //simulação carregamento
        const timer = setTimeout(() => {
            setLoading(false)
        },300)

        return ()=> clearTimeout(timer)

    },[date])

   function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
   }

   function editPost(project){
        if(project.budget < project.cost){
            setMessage("O orçamento não pode ser menor que o custo do projeto!")
            setType("error")
            return false
        }


        fetch(`http://localhost:5000/projects/${project.id}`, {
        method: "PATCH",
        headers: {"content-Type": "application/json",},
        body: JSON.stringify(project)
        })
          .then ((res) => res.json())
          .then((date) =>{
               setProject(date)
               setShowProjectForm(false)

                setMessage("Projeto atualizado")
                setType("success")

                const time = setTimeout(() => {
                    setMessage("")
                }, 1500)
                return ()=> clearTimeout(time)
          })
          .catch((err) => console.log(err))
        

   }

    return (
       <>
        {loading 
            ? (<Loading />)
            : (<div className="project_detais">
                <Container CustomClass="column with_cem">
                    {message && <MensagenSystem msg={message} type={type} />}

                    <div className="detais_container">
                        <h1>Projeto: {project.name}</h1>
                        <button className="btn" onClick={toggleProjectForm}>
                            {!showProjectForm ? "Editar projeto" : "Fechar"}
                        </button>

                        {!showProjectForm 
                            ? (<div className="project_info">
                                    <p>
                                        <span>Categoria:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento:</span> {project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado:</span> {project.cost}
                                    </p>
                             </div>)

                            : (<div className="project_info">
                                <ProjectForm btnText="Concluir edição"  handleSubmit={editPost} projectData={project} />
                            </div>)
                        }
                    </div>
                </Container>
             </div>)
        }
       </>
    )
}

export default Project