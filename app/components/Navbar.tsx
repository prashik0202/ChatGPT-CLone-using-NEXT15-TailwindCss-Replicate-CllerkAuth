'use client'
import React from 'react'
import Link from 'next/link';
import { useUser, UserButton } from '@clerk/nextjs'

function Navbar() {

  const { user } = useUser();

  return (
    <div className="navbar bg-base-100 absolute">
      <div className="flex-1 mx-5">
        <Link href={'/'} className="text-2xl font-bold text-primary">ChatAI</Link>
      </div>
      <div className="flex-none gap-2 mr-2">
        {
          user ? (
            <>
              <h1 className='text-slate-500'>Hi {user.firstName}</h1>
              <UserButton />
            </>
          ) : (
            <Link href={'/room'} className='btn btn-outline text-xl'>Login</Link>
          )
        }
        
      </div>
    </div>
  )
}

export default Navbar
