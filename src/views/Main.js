import Navbar from "../layout/navbar/Navbar"
import Projects from "../layout/projects/Projects"
import Welcome from "../layout/welcome/Welcome"
import About from "../layout/about/About"
import Contact from "../layout/contact/Contact"
import './Main.scss'
import {useState} from "react"

function Main() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div  className="main">
            
            <Welcome/>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <About/>
           <Projects/>
           
           <Contact/>

            
        </div>
    )
}

export default Main
