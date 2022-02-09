import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Company from "./Pages/Company"
import Contact from "./Pages/Contact"
import Newproject from "./Pages/Newproject"
import Projects from "./Pages/Projects"
import Project from "./Pages/Project"


import Container from "./Components/Layout/Container"
import Navbar from "./Components/Layout/Navbar"
import Footer from "./Components/Layout/Footer"



function Routers(){
    return (
        <Router>
            <Navbar />

            <Container  CustomClass={"min-height"}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/newproject" element={<Newproject />} />
                    <Route path="/project/:id" element={<Project />} />

                </Routes>
            </Container>

            <Footer />
        </Router>
    )
}

export default Routers