import { useState } from "react";

import "./FormData.css"
import FormElements from "./FormElements"


const FormData = () => {
    const [fullData, setFullData] = useState([]);
    const randomID = ()=> Math.floor(Math.random() * 10000 * 1000000)
    const updateData = (data) => {
        
        setFullData(c => [...c, { ...data, id: randomID() }])
    }
    const handleDelete = (e) => {
        const { id } = e.target;
        console.log(id);
        setFullData(c => c.filter((all)=>all.id !== Number(id)))
    }

    return (
        <>
            
            <FormElements updateData={updateData} />
            <ol>
                {fullData.map(items => <li style={{ listStylePosition: "inside" }} id={items.id } className="listItems" key={items.id} onClick={(id)=>handleDelete(id)}>{items.list}</li>)}
            </ol>
            </>
    )
}

export default FormData;