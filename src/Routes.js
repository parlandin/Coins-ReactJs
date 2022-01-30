import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import Home from "./Pages/Home"
import Company from "./Pages/Company"
import Contact from "./Pages/Contact"
import Newproject from "./Pages/Newproject"


function Routers(){
    return (
        <Router>
            <ul>
                <li>Home</li>
                <li>Contanto</li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/company" element={<Company />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/newproject" element={<Newproject />} />

            </Routes>
          
        </Router>
    )
}

export default Routers