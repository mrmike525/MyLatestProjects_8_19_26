
import Navbar from './Components/Navbar'
import FootNote from './Components/FootNote'
import Me from "./assets/me.jpeg"
import Abby from "./assets/Abby.jpeg"
import Contact from './Components/Contact'
import './App.css'

function App() {
 

  return (
    <>
      <header>
        <Navbar/>
      </header>
      
      <main>
        <img className='me' src={Me} alt="" />
        <img className='abby' src={Abby} alt="" />
      </main>
      
      <footer>
        <Contact/>
      <FootNote/>
      </footer>
    </>
  )
}

export default App
