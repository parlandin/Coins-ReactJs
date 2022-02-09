import styles from "./project.css"
import {useParams} from "react-router-dom"
import React, {useState, useEffect} from "react"
import GetMethod from "../../Components/RequestApi/GetMethod"
import Loading from "../../Components/Layout/Loading"
import Container from "../../Components/Layout/Container"
import ProjectForm from "../../Components/Forms/ProjectForm"
import MensagenSystem from "../../Components/Layout/MensagenSystem"
import ServiceForm from "../../Components/Forms/ServiceForm"
import {parse, v4 as uuidv4} from "uuid"
import ServiceCard from "../../Components/ServiceCard"

function Project(){
    const  { id } = useParams()
    const date = GetMethod(`projects/${id}`, "GET")
    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')


    useEffect(()=> {
        setProject(date)
        setServices(date.services)
       

        //simulação carregamento
        const timer = setTimeout(() => {
            setLoading(false)
        },300)

        return ()=> clearTimeout(timer)

    },[date])

   function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
   }

   function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }




   function editPost(project){
       setMessage("")
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
          .then (async(res) =>{
                setProject(await res.json())
                setShowProjectForm(false)

                setMessage("Projeto atualizado")
                setType("success")
          })
          .then((date) =>{})

   }


    function createService(project){
        setMessage("")
        const lastService = project.services[project.services.length  -1]
       

        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost
        const newCost  = parseFloat(project.cost) + parseFloat(lastServiceCost)


        if(newCost > parseFloat(project.budget)){
            setMessage("Orçamento ultrapassado, verifique o valor do serviço")
            setType("error")
            project.services.pop()
           
            return false
        }

        project.cost = newCost

        
        fetch(`http://localhost:5000/projects/${project.id}`, {
        method: "PATCH",
        headers: {"content-Type": "application/json",},
        body: JSON.stringify(project)
        })
          .then (async (res) => {
              console.log(await res.json()) 
              setShowServiceForm(false)
              setMessage("Serviço adicionado com sucesso")
              setType("success")
            })
          .catch((error)=> console.log("error:", error))
    }

    function removeService(id, cost){
        const servicesUpdate = project.services.filter((service) => service.id != id)



        const projectUpdate = project
        projectUpdate.services = servicesUpdate
        projectUpdate.cost = parseFloat(projectUpdate.cost) - parseFloat(cost)

    
        fetch(`http://localhost:5000/projects/${projectUpdate.id}`, {
        method: "PATCH",
        headers: {"content-Type": "application/json",},
        body: JSON.stringify(projectUpdate)
        })
          .then (async (res) => {
              setProject(await res.json())
              setServices(servicesUpdate)
              setMessage( "Serviço removido")
              setType("success")
            })
          .catch((error)=> console.log("error:", error))
        
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
                                        <span>Total de Orçamento:</span> R$ {
                                            new Intl.NumberFormat('BRL', { maximumSignificantDigits: 3 }).format(project.budget)
                                        }
                                        
                                    </p>
                                    <p>
                                        <span>Total Utilizado:</span>R$ {
                                            new Intl.NumberFormat('BRL', { maximumSignificantDigits: 3 }).format( project.cost)
                                        }
                                    </p>
                             </div>)

                            : (<div className="project_info">
                                <ProjectForm btnText="Concluir edição"  handleSubmit={editPost} projectData={project} />
                            </div>)
                        }
                    </div>

                    <div className="service_form_container">
                        <h2>Adicione um serviço: </h2>
                        <button className="btn" onClick={toggleServiceForm}>
                            {!showServiceForm ? "Adicionar serviço" : "Fechar"}
                        </button>

                        <div className="project_info">
                            {showServiceForm && 
                                (<ServiceForm 
                                handleSubmit={createService}
                                btnText="Adicionar serviço" 
                                projectData={project}/>)}
                        </div>
                    </div>

                    <h2>Serviços</h2>
                    {message && <MensagenSystem msg={message} type={type} />}

                    <Container CustomClass="start with_cem">
                        {project.services.length > 0 && 
                            services.map((service) => (
                                <ServiceCard
                                id={service.id}
                                name={service.name}
                                cost={service.cost}
                                description={service.description}
                                key={service.id}
                                handleRemove={removeService}/>
                            ))
                         }

                        {project.services.length == 0 &&
                        <p>Não há serviços cadastrados.</p> }
                    </Container>

                </Container>
             </div>)
        }
       </>
    )
}

export default Project