import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(true)
  const handleClick = () =>{setValue(!value);}
  return (
    <>
     {!value ? "...Loading" : count}
     <div className='buttonContainer'>
     <button className='button' onClick={handleClick}>Press Me</button>
    </div>
    </>
  )
}

export default App
