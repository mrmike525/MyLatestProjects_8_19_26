import { useState } from "react";
import { useEffect } from "react";
import "./Banner.css"
const Banner = () => {
    
    const randomPosition = () => Math.floor(Math.random() * 100);
    const randomX = ()=>randomPosition() + "vw";
    const randomY = ()=>randomPosition() + "vh";
    const [span, setSpan] = useState(
        [
            { position: "absolute", element: "span", character: "*", color: "red", fontSize: "50px", y: randomY(), x: randomX(), id: 1 }
        ]);
    // useEffect(() => {

    //     const interval = setInterval(() => {
    //         setSpan(c => c.map(item => ({
    //             ...item,
    //             x: randomX(),
    //             y: randomY()
    //         })));
    //     }, 1500);
    //     console.log(span);
    //     return () => clearInterval(interval);
        

    // },  [span])
    return (
        <>
            <div className="bannerBox">
                <h1 className="banner">Michael Lange</h1>
                <h2 className="banner" style={{ position: "absolute", top: "50px" }}>Abby Zvanovec</h2>
                {span.map(item => (
                    <span id={item.id} key={item.id } style={{ position: item.position, top: item.y, left: item.x, color: item.color, fontSize: item.fontSize }}>{item.character}</span>
                ))}
                {/* <span style={{position: "absolute", top: randomY(), left: randomX(), color: "red", fontSize: "50px"}}>*</span> */}
        </div>
            </>
    )
}

export default Banner;