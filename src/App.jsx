import { useState } from "react"
import Card from "./components/Card"
import InputBox from "./components/InputBox"
import Button from "./components/Button"
import "./style.scss"

function App() {

  const [valueSate,setValueState] = useState("")
  const [state,setState] = useState(true)

  const inputChange = (event) => {
    setValueState(event.target.value)
  }

  const clickHandle = () => {
    setState(!state)
  }

  return (
    <div>
      <Card>
        <InputBox value= {valueSate} onChange= {inputChange} class= {state===true?"shown":"hidden"}/>
        <Button title= {state===true?"Hide":"Show"} onClick={clickHandle} />
      </Card>
    </div>
  )
}

export default App
