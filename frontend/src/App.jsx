import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import './App.css'

function App() {

  const [code, setCode] = useState(` function sum() {
    return 1 + 1
  }`)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  return (
    <>
      <main className='w-full h-screen flex bg-zinc-800 p-4 gap-4' >
        <div className="left h-full w-full basis-[50%] ">
          <div className="code w-full h-full bg-zinc-900 p-4 rounded-lg ">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
            <div
              // onClick={reviewCode}
              className="review bottom-4 left-4">Review</div>
          </div>
        </div>
        <div className="right h-full bg-cyan-950 rounded-md basis-[50%]"></div>
      </main>
    </>
  )
}

export default App
