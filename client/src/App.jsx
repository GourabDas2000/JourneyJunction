import { useState } from 'react'

import './App.css'

function App() {
  const [text , settext] = useState('')
  // console.log(process.env.REACT_BASE_URL)
  const handlesubmit = async() => {
    //  try{
    //    const result = await fetch('https://journeyjunction-server.vercel.app/auth/text', {
    //      method: 'PUT',
    //      body: JSON.stringify({ text }),
    //      headers: {
    //        'Content-Type': 'application/json'
    //      }
    //    })
    //    const final = await result.json();
    //    console.log(final);
    //  }catch(e){
    //   console.log(e)
    //  }
    try{
      const result = await fetch('https://journeyjunction-server.vercel.app/alltext')
      const res = await result.json()
      console.log(res)
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
