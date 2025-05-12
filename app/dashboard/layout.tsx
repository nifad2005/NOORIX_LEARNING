import React from 'react'
import Nav from '../components/dashboard/Nav'

export default function Layout({ children }: { children: React.ReactNode }) {   
  return (
    <div className="layout flex">
        <Nav/>
        <div className="flex-grow ml-64">

        {children}
        </div>
    </div>
  )
}
