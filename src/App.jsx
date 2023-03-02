import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Confetti from 'react-confetti'
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import './App.css'

function App() {

  const [values,setValues] = useState(Array(9).fill(""))
  const { width, height } = useState(window.innerWidth,window.innerHeight)

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

  const final = winner(values)
  const stylee = {
   color: final === "X" ? "red" : "green",
  }
  const radius = {
    borderRadius : "0px",
    minHeight : "100vh"
  }

  return (
    <Paper sx={radius} elevation={10}>
    <div style={radius} className="Tic-container" >
    { final ? <Confetti
      width={width}
      height={height}
    /> : "" }
    <h1 className="headd">Tic Tac Toe</h1>
    <div className="App">
        { values.map((one,index)=> <GameBox box={one} key={index} onBoxClick={()=> HandClick(index)}/>)} 
    </div>

    { final ? <p>The Winner is : <span style={stylee}>{final}</span></p> : "" } 

    {final ? <Button className="extra" variant="contained" onClick={
        ()=> setValues(Array(9).fill(""),
        setXTurn(true)
        )
      }>Play Again</Button> : <Button className="extra" variant="contained" onClick={
        ()=> setValues(Array(9).fill(""),
        setXTurn(true)
        )
      }>Try Again</Button>}
    
    </div>
    </Paper>
  )
}

function GameBox({box,onBoxClick}) {
  const style = {
    color : box == "X" ? "green" : "red",
  }
  return (
    <div style={style} className="content-box" onClick={onBoxClick}>
        {box}
    </div>
  )
}

export default App;
