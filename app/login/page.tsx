"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1>login</h1>
      <p>Please enter your credentials</p>
      <button onClick={() => {signIn('google')}}>Login</button>
    </div>
  )
}
