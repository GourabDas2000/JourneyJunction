import { useState } from 'react'
import './App.css'

function App() {
  const [text , settext] = useState('')
  const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL
  const handlesubmit = async() => {
    try{
      const result = await fetch(`${BASE_URL}alltext`)
      const res = await result.json()
      console.log('res=',res)
    }catch(e){
      console.log(e)
    }
  }
  return (
    <>
     <input type='text' onChange={(e) => settext(e.target.value)}/>
     <button onClick={handlesubmit}>Click to store the text</button>
    </>
  )
}

export default App
