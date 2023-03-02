import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [values,setValues] = useState(Array(9).fill(""))
  return (
    <div>
    <div className="App">
        { values.map((one,index)=> <GameBox box={one} key={index}/>)}
    </div>
    </div>
  )
}

function GameBox() {
  const [value,setValue] = useState()
  const style = {
    color : value == "X" ? "green" : "red",
  }
  return (
    <div>
    <div style={style} className="content-box" onClick={()=>{
      setValue("X")
    }}>
        {value}
    </div>
    </div>
  )
}

export default App;
