import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count , setCount] = useState(0)
  return (
    <div className="App">
      <button onClick={()=>
         setCount(count-1)
      }>-</button>
      Count : {count}
      <button onClick={()=>
         setCount(count+1)
      }>+</button>
    </div>
  )
}

export default App;
