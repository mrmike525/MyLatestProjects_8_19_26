import { useState } from "react";

const Innie = () => {
    const [num, setNum] = useState(0);

    const increaseByOne = () => {
        setNum(c => c + 1);
        setNum(c =>c + 1)
        
    }

    return (
        <>
            <div>
                {num}
                </div>
            <button onClick={increaseByOne}>Increase Num by 1</button>
        
            </>
    )
}

export default Innie;