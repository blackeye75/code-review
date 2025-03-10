import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import './App.css'
import axios from 'axios'
import Markdown from "react-markdown"
import "highlight.js/styles/github-dark.css";
import rehypeHighlight from "rehype-highlight";

function App() {

  const [code, setCode] = useState("")

  const [review, setReview] = useState(``)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/get-review', { code })
    setReview(response.data)
  }

  return (
    <>
      <main className='w-full h-screen flex bg-zinc-800 p-4 gap-4' >
        <div className="left h-full w-full basis-[50%] ">
          <div className="code w-full h-full bg-zinc-900 text-white  rounded-lg relative ">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",

                // padding: "1rem",
              }}
            />
            <div
              onClick={reviewCode}
              className="review absolute bottom-6 right-6 cursor-pointer bg-white text-black px-3 py-2 font-medium rounded-md">Review</div>
          </div>
        </div>
        <div className="right p-4 overflow-auto text-white h-full bg-cyan-950 rounded-md basis-[50%]">
          <Markdown 
          // border-radius={5}
          rehypePlugins={[rehypeHighlight]}
          >{review}</Markdown>
        </div>
      </main>
    </>
  )
}

export default App
