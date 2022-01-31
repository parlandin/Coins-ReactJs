import { Link } from "react-router-dom"
import Container from "../Container"
import styles from "./navbar.css"
import logo from "../../../images/coins_logo.svg"

function Navbar() {
    return (
    <nav  className="navbar">
        <Container CustomClass={"with_cem"}>

            <Link to="/" className="logo">
                <img  src={logo} alt="coins logo"/>
            </Link>

            <ul className="list">
                <li className="item"> <Link to="/">Home</Link> </li>

                <li className="item"> <Link to="/projects">Projetos</Link></li>

                <li className="item"> <Link to="/company">Empresa</Link> </li>

                <li className="item"> <Link to="/contact">Contato</Link> </li>
            </ul>
            
        </Container>
    </nav>
    )
}

export default Navbar