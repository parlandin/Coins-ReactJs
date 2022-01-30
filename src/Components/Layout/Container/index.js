import styles from "./container.css"

function Container( {children, CustomClass} ) {
    console.log(styles)
    return (
        <div className={`container ${CustomClass}`}>
            { children }
        </div>
    )
}

export default Container