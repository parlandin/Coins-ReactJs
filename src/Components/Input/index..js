import style from "./input.css"

function Input({ type, value ,text, name, placeholder, handleOnChange}) {
    return (
        <div className="form_Control">
            <label className="label" htmlFor={name}>{text}</label>
            <input id={name} type={type} value={value} placeholder={placeholder}
            onChange={handleOnChange}/>
        </div>
    )
}

export default Input