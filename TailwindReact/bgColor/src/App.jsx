import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState("purple")

  console.log(color);
  
  return (
    <>
      <div className='w-full h-screen duration-500' style={{backgroundColor:color}}>
         <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 rounded-3xl'>
            <button onClick={()=>setColor("red")} style={{backgroundColor:"red"}}className='outline-none px-4 py-1 rounded-full text-white shadow-lg '>Red</button>
            <button onClick={()=>setColor("green")} style={{backgroundColor:"green"}}className='outline-none px-4 py-1 rounded-full text-white shadow-lg '>green</button>
            <button onClick={()=>setColor("orange")} style={{backgroundColor:"orange"}}className='outline-none px-4 py-1 rounded-full text-white shadow-lg '>orange</button>
            <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}className='outline-none px-4 py-1 rounded-full text-white shadow-lg '>blue</button>
          </div>
         </div>
      </div>
    </>
  )
}

export default App
