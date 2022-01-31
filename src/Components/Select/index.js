import style from "./select.css"

function Select({ value ,text, name, options, handleOnChange}) {
    return (
        <div className="form_Control">
            <label className="label" htmlFor={name}>{text}</label>
            <select name={name} 
            id={name} 
            onChange={handleOnChange}
            value={value || ""}>

                <option >Selecione uma opção</option>

                {options.map((option) => {
                    return (
                    <option  value={option.id} key={option.id}>{option.name}</option> 
                    )
                })}

            </select>
        </div>
    )
}

export default Select