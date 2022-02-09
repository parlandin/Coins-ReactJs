import styles from "../ProjectsCards/projectscards.css"
import {BsFillTrashFill} from "react-icons/bs"

function ServiceCard({id, cost, name, handleRemove, description}){

    function remove(e){
        e.preventDefault()
        handleRemove(id, cost)
    }

    return (
        <div className="project_card">
            <h4>{name}</h4>
            <p>
                <span>Custo Total:</span> R$ {cost}
            </p>
            <p> {description} </p>
            <div className="project_card_actions">
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default ServiceCard