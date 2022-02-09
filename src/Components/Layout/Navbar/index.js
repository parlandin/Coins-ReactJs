import { Link } from "react-router-dom"
import Container from "../Container"
import styles from "./navbar.css"
import logo from "../../../images/coins_logo.svg"
import React, {useState} from "react"

function Navbar() {
    const [active, setActive] = useState(false)

    window.addEventListener('resize', () => {
        setActive(false)
        
    })

    function toggleClass(){
        setActive(!active)
    }

    return (
    <nav  className="navbar">
        <Container CustomClass={"with_cem"}>

            <Link to="/" className="logo">
                <img  src={logo} alt="coins logo"/>
            </Link>

            <ul className={`list ${active ? "active" : ""}`}>
                <li className="item" onClick={active ? toggleClass : ()=>{} }> 
                    <Link to="/">Home</Link> 
                </li>

                <li className="item" onClick={active ? toggleClass : ()=>{} }> 
                    <Link to="/projects">Projetos</Link>
                </li>

                <li className="item" onClick={active ? toggleClass : ()=>{} }> 
                    <Link to="/company">Empresa</Link> 
                </li>

                <li className="item" onClick={active ? toggleClass : ()=>{} }> 
                    <Link to="/contact">Contato</Link> 
                </li>
            </ul>


            <button  className={`button_mobile  ${active  ? "active" : ""}`} onClick={toggleClass}>
            <div className={`menu_mobile `} >
            </div>
            </button>
            
        </Container>
    </nav>
    )
}

export default Navbar