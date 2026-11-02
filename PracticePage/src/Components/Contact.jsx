import { useEffect } from "react";
import { useState } from "react";
const Contact = () => {
    const colors = ["red", "green", "blue"];
    const cycleColors = () => {
        const randomIndex = () => Math.floor(Math.random() * 3);
        return colors[randomIndex()];
    }
    const [randomColor, setRandomColor] = useState(null);
    useEffect(() => {
        let dex = ""
        const runinterval = setInterval(() => {
                setRandomColor(()=>cycleColors())
        }, 500);
    
    return ()=>clearInterval(runinterval)
    }, [randomColor])
    return (
        <>
            
            <h1>
                <span style={{ color: randomColor }}>M</span>
                <span style={{color: randomColor}}>i</span>
            <span style={{color: randomColor}}>c</span>
            <span style={{color: randomColor}}>h</span>
                <span style={{ color: randomColor }}>a</span>
                <span style={{ color: randomColor }}>e</span>
                <span style={{ color: randomColor }}>l</span>
                
            </h1>
                <ul>
                    <li>Phone 651-347-5903</li>
                    <li>email: <a href="mailto: mrlange892@gmail.com">mrlange892@gmail.com</a></li>
                    <li>Linkedin</li>
                </ul>
            
        </>
    )
}

export default Contact;