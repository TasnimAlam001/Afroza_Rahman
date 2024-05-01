import { useEffect } from 'react'
import BIRDS from 'vanta/src/vanta.birds'
import './App.css'
import Main from './pages/Main/Main'

function App() {
  
  useEffect(()=>{
    BIRDS({
      el:"#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    })
  },[])

  return (
    <div className="app">
      <div className="vanta" id="vanta"> <Main/></div>
    </div>
  )
}

export default App
