import { useState } from "react";

import "./FormElements.css"

const FormElements = ({updateData}) => {
    const INITIAL_STATE = {
        list: "",
        name: "",
        email: "",
        phone: ""
    }
    const [elements, setElements] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setElements((c)=>({...c, [name]: value}))
    }
    return (
        <>
            <div className="inputFields">
            <input type="text" name="list" value={elements.list} onChange={handleChange} placeholder="ToDo"/>
            <input type="text" name="name" value={elements.name} placeholder="Name" onChange={handleChange} />
            <input type="email" name="email" value={elements.email} placeholder="Email" onChange={handleChange} />
            <input type="tel" name="phone" value={elements.phone} placeholder="Phone" onChange={handleChange} />
            

            <button onClick={() => { updateData(elements); setElements(INITIAL_STATE) }}>Add To List!</button>
        </div>
            </>
    )
}

export default FormElements;