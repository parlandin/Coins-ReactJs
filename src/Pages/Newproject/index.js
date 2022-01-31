import ProjectForm from "../../Components/Forms/ProjectForm"
import styles from "./newproject.css"

function Newproject(){
    return (
    <div className="newprojetc_container">
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços.</p>
        <ProjectForm />

    </div>

    )
}
export default Newproject