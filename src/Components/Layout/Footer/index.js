import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Style from "./footer.css"

function Footer() {
    return (
        <footer className="footer">
            <ul className="social_list">
                <li> <a href="https://github.com/Gu-Parlandim" target="_blank">{<FaGithub />}</a></li>

                <li> <a href="https://www.instagram.com/parlandim_dev/" target="_blank"> {<FaInstagram />} </a> </li>

                <li> <a href="https://www.linkedin.com/in/gustavoparlandim/" target="_blank"> {<FaLinkedin />} </a> </li>

            </ul>
            
            <p className="copy_right">
                <span>Coins.F</span> &copy; 2022
            </p>
        </footer>
    )
}

export default Footer