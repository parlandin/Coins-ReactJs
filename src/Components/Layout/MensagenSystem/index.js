import styles from "./mensagensystem.css"
import react,{useState, useEffect} from "react"

function MensagenSystem({ type, msg }){

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!msg){
            setVisible(false)
            return 
        } 

        setVisible(true)

        const timer =  setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)

    }, [msg])

    return (
        <>
           {visible && (
                <div className={`message ${type}`}> {msg} </div>
            )}
        </>
    )
}

export default MensagenSystem