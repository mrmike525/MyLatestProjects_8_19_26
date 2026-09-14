import { useState } from "react";
import "./NavBar.css"
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    
    
    return (
        <nav className={isOpen ? "navbar open" : "navbar"}>
            <button
            className="hamburger" 
           onClick={() => setIsOpen(current => !current)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="nav-links"
            >
                Contact
                {/* &#x2630; */}
                </button>
            
            <div id="nav-links" className="nav-links">
        <a href="mailto:mrlange892@gmail.com" target="_blank">Email: mrlange892@gmail.com</a>
        <a href="tel:651-347-5903" target="_blank">Cell: 651-347-5903</a>
        <a href="https://www.linkedin.com/in/michael-lange-sqa/" target="_blank">linkedin</a>
        <a href="https://github.com/mrmike525/MyLatestProjects_8_19_26/tree/Windows_11" target="_blank">GitHub Repo</a>
        
        <button className="close-menu" onClick={()=> setIsOpen(false)}>
            Close
        </button>
        </div>
        </nav>
    )
}

export default NavBar;