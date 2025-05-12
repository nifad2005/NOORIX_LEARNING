"use client"
import { signIn, useSession } from 'next-auth/react'
import { useParams } from 'next/navigation'
import React from 'react'

function Enroll() {
    const {data: session} = useSession()
    const {id} = useParams()
    if (!session) {
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
  return (
    <div>Enroll { id } course</div>
  )
}

export default Enroll