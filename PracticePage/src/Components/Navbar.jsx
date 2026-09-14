import { useState } from "react";

import "./Navbar.css"
const Navbar = () => {
    const [visible, setVisible] = useState(true);
    const changeVisible = () => {
        setVisible(c => !c)
    }
    return (
        <>
            <div className="anchor">
                {!visible && <div onMouseEnter={changeVisible} style={{ backgroundColor: "orange", width: "25px", height: "25px" }}>☰</div>}
                <nav>
                    <span onMouseLeave={changeVisible}>{`${visible}`}</span>
                    {visible && <div style={{display: "flex"}}><a href="#home">Home</a>
                <a href="https://mrmike525.github.io/MyLatestProjects_8_19_26/" target="_blank">About</a>
                <a href="">Contact</a></div>}
                </nav>
                </div>
        </>
    )
}

export default Navbar;