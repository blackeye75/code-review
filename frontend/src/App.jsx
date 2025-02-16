import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
   <main className='w-full h-screen flex bg-zinc-800 p-4 gap-4' >
    <div className="left h-full bg-green-700 basis-[50%] "></div>
    <div className="right h-full bg-yellow-600 basis-[50%]"></div>
   </main>
    </>
  )
}

export default App
