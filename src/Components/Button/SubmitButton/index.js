import style from "./submitbutton.css"

function SubmitButton({ text }) {
    return (

    <div>
         <button className="submit_button">{text}</button>
    </div>
    )
}

export default SubmitButton