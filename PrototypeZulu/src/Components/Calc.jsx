import { useState } from "react";
import { useEffect } from "react";
import "./Calc.css"

const Calc = () => {
    const [calcValueOne, setCalcValueOne] = useState(0);
    const [selectedOperator, setSelectedOperator] = useState(null);
    const [calcValueTwo, setCalcValueTwo] = useState(0);
    const [valueOneOrTwo, setValueOneOrTwo] = useState(true);
    const [result, setResult] = useState(null);
    const [valuesOrResult, setValuesOrResult] = useState(true);
    const handleClick = (value) => {
        if (valueOneOrTwo) {
            if (value === "AC") {
                return setCalcValueOne(0)
            }
            else if (value === "÷") {
                setSelectedOperator(value);
               
            }
            else if (value === "×") {
                setSelectedOperator(value)
            }
            else if (value === "-") {
                setSelectedOperator(value)
            }
            else if (value === "+") {
                setSelectedOperator(value)
            }
            else if (value === "=") {
                if (selectedOperator === "+") {
                    setResult(Number(calcValueOne) + Number(calcValueTwo))
                }
                else if (selectedOperator === "-") {
                        setResult(Number(calcValueOne) - Number(calcValueTwo))
                    }
                else if (selectedOperator === "×") {
                        setResult(Number(calcValueOne) * Number(calcValueTwo))
                    }
                else if (selectedOperator === "÷") {
                        setResult(Number(calcValueOne)/Number(calcValueTwo))
                }
                setValuesOrResult(c => (!c))
            }
            else {
                setCalcValueOne(c => {
                    if (c === 0) {
                        return c = `${value}`
                    }
                    else {
                        return c += `${value}`
                    }
                })
            }
        }
        
        else {
                if (value === "AC") {
                    return setCalcValueTwo(0)
                }
                else if (value === "÷") {
                    setSelectedOperator(value);
                    
                }
                else if (value === "×") {
                    setSelectedOperator(value)
                }
                else if (value === "-") {
                    setSelectedOperator(value)
                }
                else if (value === "+") {
                    setSelectedOperator(value)
                }
                else if (value === "=") {
                    if (selectedOperator === "+") {
                        setResult(Number(calcValueOne) + Number(calcValueTwo))
                    }
                    else if (selectedOperator === "-") {
                        setResult(Number(calcValueOne) - Number(calcValueTwo))
                    }
                    else if (selectedOperator === "×") {
                        setResult(Number(calcValueOne) * Number(calcValueTwo))
                    }
                    else if (selectedOperator === "÷") {
                        setResult(Number(calcValueOne) / Number(calcValueTwo))
                    }
                    setValuesOrResult(c => (!c))
                    
                }
                else {
                    setCalcValueTwo(c => {
                        if (c === 0) {
                            return c = `${value}`
                        }
                        else {
                            return c += `${value}`
                        }
                
                    })
                }
            }
        
    }
    useEffect(() => {
        console.log(selectedOperator);
        console.log(valuesOrResult)
    }, [selectedOperator, valuesOrResult])

    return (
        <>
            <div className="calcSection">
                <div className="calcContainer">
                    <div className="calcValue">
                        <span>
                            {valuesOrResult && valueOneOrTwo ? calcValueOne : calcValueTwo}
                            {!valuesOrResult && `${result}`}</span>
                    </div>
                    <div className="buttonContainer">
                        <div className="sectionOne">
                        <button>X</button>
                        <button onClick={()=>handleClick("AC")}>AC</button>
                        <button>%</button>
                            <button className="operator" onClick={() => handleClick("÷")}>÷</button>
                            <button onClick={()=>setValueOneOrTwo(c => !c)}>{valueOneOrTwo ? "value: 1" : "value: 2"}</button>
                            </div>
                        <div className="sectionTwo">
                        <button onClick={()=>handleClick(7)}>7</button>
                        <button onClick={()=>handleClick(8)}>8</button>
                            <button onClick={()=>handleClick(9)}>9</button>
                            <button className="operator" onClick={() => handleClick("×")} >×</button>
                        </div>
                        <div className="sectionThree">
                        <button onClick={()=>handleClick(4)}>4</button>
                        <button onClick={()=>handleClick(5)}>5</button>
                            <button onClick={()=>handleClick(6)}>6</button>
                            <button className="operator" onClick={() => handleClick("-")} >-</button>
                        </div>
                        <div className="sectionFour">
                        <button onClick={()=>handleClick(1)}>1</button>
                        <button onClick={()=>handleClick(2)}>2</button>
                            <button onClick={()=>handleClick(3)}>3</button>
                            <button className="operator" onClick={() => handleClick("+")} >+</button>
                        </div>
                         <div className="sectionFive">
                        <button>±</button>
                            <button onClick={() => handleClick(0)}>0</button>
                            <button>.</button>
                            <button className="operator" onClick={() => handleClick("=")} >=</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ position: "fixed", bottom: "100px"  }}>
            <div>{`Value One or Two Switch: ${valueOneOrTwo}`}</div>
                <div>{`ValueOne: ${calcValueOne}`}</div>
                <div>{`operator: ${selectedOperator=== null ? "Choose a Operator" : selectedOperator}`}</div>
                <div>{`ValueTwo: ${calcValueTwo}`}</div>
                <div>{`Result: ${result===null ? 0 : result}`}</div>
                
    </div>
            </>
    )
}

export default Calc;