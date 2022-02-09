import { Link } from "react-router-dom"
import styles from "./projectscards.css"
import { BsPencil, BsFillTrashFill} from "react-icons/bs"

function ProjectsCards({id, name, budget, category, handleRemove,}){
    return (
        <div className="project_card">
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> 
                R${new Intl.NumberFormat('BRL', { maximumSignificantDigits: 3 }).format(budget)}
            </p>
            <p className={`category_text ${category.toLowerCase()}`}>
                <span></span>{category}
            </p>
            <div className="project_card_actions">
                <Link to={`/project/${id}`}>
                    <BsPencil /> Editar
                </Link>

                <button onClick={() => handleRemove(id)}>
                    <BsFillTrashFill /> Remover
                </button>
            </div>
        </div>
        
    )
}

export default ProjectsCards