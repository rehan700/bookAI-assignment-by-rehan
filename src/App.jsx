import React, { useState } from 'react'
import TheNavbar from './components/TheNavbar'
import Body from './components/Body'
import Button from './components/Button'
import './css/Navbar.css'

function App() {
  const [mode, setMode] = useState("light")
  const handleToggleSwitch = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#fff';
      console.log("switched to dark mode!");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
      console.log("switched to ligth mode!")
    }
  }
  return (
    <>
      <TheNavbar modefunction={handleToggleSwitch} mode={mode} />
      <Body mode={mode}/>
      <div className="mybutton2">
        <Button />
      </div>
    </>
  )
}

export default App
