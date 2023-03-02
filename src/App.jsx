import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [values,setValues] = useState(Array(9).fill(""))
  const [XTurn,setXTurn] = useState(true)

  const HandClick = (index)=>{
    if(!final && values[index] === ""){
      console.log(index)
    const copy = [...values];
    copy[index] = XTurn ? "X" : "O"
    setValues(copy)
    setXTurn(!XTurn)
    }
  }

  const winner = (values)=>{

    const index = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for (let i = 0; i < index.length; i++) {
      const [a,b,c] = index[i];
    if(values[a] != "" && values[a] === values[b] && values[b] === values[c]){
      return values[a]
    }
  }
    return null
  }

  return (
    <div>
    <div className="App">
        { values.map((one,index)=> <GameBox box={one} key={index}/>)} 
    </div>
    </div>
  )
}

function GameBox() {
  const style = {
    color : value == "X" ? "green" : "red",
  }
  return (
    <div style={style} className="content-box" onClick={onBoxClick}>
        {value}
    </div>
  )
}

export default App;
