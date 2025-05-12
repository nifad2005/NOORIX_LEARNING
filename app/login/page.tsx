"use client"
import { setUser } from '@/libs/redux/slices/userSlice'
import {  signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function page() {
  const [settingUp, setSettingUp] = useState(true)
  const {data: session} = useSession()
  const dispatch = useDispatch()
  if (session) {
    const handleBecomeUser = async () => {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role: 'learner',
          email:session?.user?.email
        }),
      })
      if (!response.ok) {
        console.log('Error in applying for user role');
       
        return;
      }
      const data = await response.json();
      if (data) {
        console.log('User role set successfully');
        console.log("data",data);
        dispatch(setUser(data.userData));
        setSettingUp(false);
        redirect('/dashboard');
      }
    }
    handleBecomeUser();
    

    return (
      <div>
        <h1>You logged in successfully</h1>
        <p>Setting up your account...</p>
       
      </div>
    )
  }
  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-sky-500 mb-4">Login</h1>
        <p className="text-slate-600 mb-6">Sign in with your Google account to continue</p>
        <button
          onClick={() => signIn('google')}
          className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  )
}
