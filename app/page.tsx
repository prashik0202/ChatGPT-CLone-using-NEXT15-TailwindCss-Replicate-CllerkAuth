import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-7xl font-bold">
            <span className='text-accent'>ChatAI</span> is a <span className='text-accent'>AI</span> powered model
          </h1>
          <p className="py-6 text-slate-500 text-xl">Power your task with Llama-2-70B-Chat, a robust 70 billion-parameter language model from Meta, finely tuned for dynamic chat completions.</p>
          <Link href={'/room'}> 
            <button className="btn btn-primary btn-outline btn-md" >Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
