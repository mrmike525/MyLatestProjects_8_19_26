import { useState } from "react";
import { useEffect } from "react";
const ColorRender = (props) => {
    const [styleArray, setStyleArray] = useState([])
    console.log(props)
    const pickRandomColor = () => {
        const colorChoices = ["red", "blue", "green", "#A8B087", "#CE1483", "#E0A890", "#70B77E", "#129490", "#065143"];
        let index = Math.floor(Math.random() * colorChoices.length) + 1;
        if(index > colorChoices.length - 1){
            index = 0;
        }
        return colorChoices[index]
    }
    const propsLength = props.word[0].length;
    console.log(propsLength)
    function makeItHappen(){
        const builtArray = [];
        for(let x = 0; x < propsLength; x++){
            builtArray.push(pickRandomColor()) 
        }
        setStyleArray(builtArray)
    }

    useEffect(()=>{
        
        const interValId = setInterval(()=> makeItHappen(), 1500);
        
        return ()=>clearInterval(interValId)
    }, [styleArray], )
    return (
        <div>
        <h1>
    {props.word.map((word, wordIndex) => (
        <span key={wordIndex}>
            {word.split("").map((letter, letterIndex) => (
                <span
                    key={letterIndex}
                    style={{ color: styleArray[letterIndex] }}
                >
                    {letter}
                </span>
            ))}
            {" "}
        </span>
    ))}
</h1>
</div>
      
    )
}

export default ColorRender;