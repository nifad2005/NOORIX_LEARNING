"use client"
import { signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Page() {
    const { data: session } = useSession()
    console.log("user session :",session)

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold text-sky-500 mb-6">Dashboard</h1>

            {/* Taken Classes Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-700 mb-4">Taken Classes</h2>
                <p className="text-slate-600 mb-4">View the classes you have enrolled in.</p>
                <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600">
                    <a href="/dashboard/classes">See All Classes</a>
                </button>
            </div>

            {/* All Creations Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-700 mb-4">Your Creations</h2>
                <p className="text-slate-600 mb-4">Manage the content you have created.</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                    <a href="/dashboard/creation">View Creations</a>
                </button>
            </div>

            {/* Become a Creator Section */}
            <div>
                <h2 className="text-2xl font-bold text-slate-700 mb-4">Become a Creator</h2>
                <p className="text-slate-600 mb-4">Apply to become a content creator on our platform.</p>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                    <a href="/dashboard/settings">Apply Now</a>
                </button>
            </div>
        </div>
    )
}

export default Page