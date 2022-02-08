import styles from "./container.css"

function Container( {children, CustomClass} ) {
    return (
        <div className={`container ${CustomClass}`}>
            { children }
        </div>
    )
}

export default Container