import React from 'react'
import { RiAiGenerate } from "react-icons/ri";

const page = () => {
  return (
    <div className='min-h-screen py-20 flex justify-center' >
      <div className='flex flex-col r w-1/2 '>
        <div className='' >
          <h1 className='text-4xl text-center'>ChatAI</h1>
          <p className='text-l text-slate-500 text-center mt-2'>Enter prompt to  Unlock dynamic conversational experiences, code generation, creative writing, language understanding, and more with Llama-2-70B-Chat API's versatile capabilities.</p>
        </div>
        <div className='mt-10 flex flex-col justify-center'>
          <div className="form-control">
            <textarea className="textarea textarea-bordered h-24 resize-none" placeholder="Please enter your prompt"></textarea>
            <button className='mt-3 btn btn-primary btn-md text-lg'><RiAiGenerate />Generate</button>
          </div>
        </div>
        <div className="mockup-window border bg-base-300 mt-20">
          <div className="flex justify-center px-4 py-16 bg-base-200">Output of AI will display here</div>
        </div>
      </div>
      
    </div>
  )
}

export default page
