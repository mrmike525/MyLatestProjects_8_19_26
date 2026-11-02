import { useState } from "react";

import "./Navbar.css"
import Links from "./Links";

const Navbar = () => {
    const [showItem, setShowItem] = useState(true)
    const toggleShow = () => {
        setShowItem(c => !c)
    }
    return (
        <>
            <div className="nav">
                {!showItem && <div style={{ position: "relative", alignSelf: "flex-start", height: "40px", width: "40px", fontSize: "30px", marginBottom: "5px", backgroundColor: "red", textAlign: "center" }} onClick={toggleShow}><p>=</p><p
                style={{marginTop: "-10px"}}
                >=</p></div>}
            {showItem && <Links toggleShow={toggleShow} />}
            <button style={{width: "fit-content"}} onClick={toggleShow}>ToggleShow</button>
            </div>
        </>
    )
}

export default Navbar;