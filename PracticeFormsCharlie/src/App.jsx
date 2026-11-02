import FormData from './FormData'
import Navbar from './Navbar'
import './App.css'

function App() {
 

  return (
    <>
      <Navbar/>
      <FormData />
      <div>
        <div className='hamburger'></div>
        <div className='hamburger'></div>
        <div className='hamburger'></div>
      </div>
    </>
  )
}

export default App
