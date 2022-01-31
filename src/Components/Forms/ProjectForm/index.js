import styles from "./project.css"
import Input from "../../Input/index."

function ProjectForm() {
    return (
    <form>
        <Input type="text" placeholder="Insira algo" text="ola" />
        <div>
            <input type="text" placeholder="Insira o nome do projeto" />
        </div>

        <div>
            <input type="number" placeholder="Insira o orçamento total" />
        </div>
        
        <select name="category_id" >
            <option disabled>Selecione a categoria</option>
        </select>
        <div>
            <input type="submit" value="Criar projeto" onClick={(e) => e.preventDefault()} />
        </div>
    </form>
    )
}

export default ProjectForm