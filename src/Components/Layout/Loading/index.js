import styles from "./loading.css"
import imgLoad from "../../../images/loading.svg"

function Loading(){
    return(
        <div className="loader_container">
            <img className="loader" src={imgLoad} alt="Image loading" />
        </div>
    )
}

export default Loading