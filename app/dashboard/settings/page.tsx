"use client"
import { signOut } from 'next-auth/react';
import React from 'react';
import { useSelector } from 'react-redux';

function SettingsPage() {
    const handleLogout = () => {
        // Logic to handle logout
        const logOut = window.confirm('Are you sure you want to log out?');
        if(logOut) {
            signOut({ callbackUrl: '/' });
        }
        console.log('User logged out');
    };
    const handleBecomeCreator = async () => {
        // Logic to handle become creator
        const response = await fetch('/api',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                role:'creator',
            }),
        })
        if(!response.ok){
            console.log('Error in applying for creator role');
            return;
        }
        console.log('User applied for creator role');
    };
    const user = useSelector((state :any)=>state.user)
    console.log("User session -settings :",user)
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-sky-500 mb-6">Settings</h1>

      {/* Basic Details Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Basic Details</h2>
        <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600">
          Edit Details
        </button>
      </div>

      {/* Become a Creator Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Become a Creator</h2>
        <button onClick={handleBecomeCreator} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          Apply Now
        </button>
      </div>

      {/* Logout Section */}
      <div>
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Logout</h2>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
}

export default SettingsPage;