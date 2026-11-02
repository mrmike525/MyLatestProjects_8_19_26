import { useState } from "react";
import "./Main.css"


const Main = () => {
    const [value, setValue] = useState(0);
    const [trueValue, setTrueValue] = useState(true);
    const handleClick = () => {
        setTrueValue(c => !c)
    }
    const handleMath = (operator) => {
        if (trueValue) {
            if (operator === "+") {
                setValue(c => c += 1)
            }
            else if (operator === "-") {
                setValue(c => c -= 1)
            }
            else if (operator === "del") {
                setValue(0)
            }
        } else {return}
    }
    return (
        <>
            <div className="mainContainer">
                <div className="subContainer">
            <h1 className="h1"> {trueValue && value}</h1>
            <button className="button" onClick={handleClick}>Click Me</button>
            <button className="button" onClick={() => handleMath("+")}>+</button>
                    <button className="button" onClick={() => handleMath("-")}>-</button>
                    <button className="button" onClick={()=>handleMath("del")}>del</button>
        </div>
                </div>
            </>
    )
}

export default Main