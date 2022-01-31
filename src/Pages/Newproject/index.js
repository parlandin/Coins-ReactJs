import { useNavigate } from "react-router-dom"
import ProjectForm from "../../Components/Forms/ProjectForm"
import ResquestApi from "../../Components/RequestApi"
import styles from "./newproject.css"

function Newproject(){
    
    /* const navigate = useNavigate() */
    const dados = ResquestApi()

    function createPost(projects) {
        projects.cost = 0
        projects.services = []

        dados("projects", "POST", JSON.stringify(projects))
        
    }

    return (
    <div className="newprojetc_container">
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços.</p>
        <ProjectForm handleSubmit={createPost} btnText="criar Projeto" />

    </div>

    )
}
export default Newproject