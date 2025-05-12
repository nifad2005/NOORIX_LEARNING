"use client"
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

function Navbar() {
  const {data: session} = useSession()
  return (
    <nav className="bg-slate-50 border-b fixed w-full border-slate-300 shadow-lg shadow-slate-200 text-sky-500">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/" className='text-4xl'>
            Noorix
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-xl *:px-4 text-slate-600">
          <Link href="/">
            <p className="hover:text-sky-500">Home</p>
          </Link>
          <Link href="/courses">
            <p className="hover:text-sky-500">Courses</p>
          </Link>
          <Link href="/category">
            <p className="hover:text-sky-500">Category</p>
          </Link>

          {
            session  ? ( <Link href="/dashboard">
            <p className="hover:text-sky-500">Dashboard</p>
          </Link>) : (<Link href="/login">
            <p className="hover:text-sky-500">Login</p>
          </Link>
            )
          }
         
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar