import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className="h-screen w-64 fixed  bg-slate-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <nav className="flex flex-col space-y-4">
        <Link href="/dashboard">
          <p className="hover:text-sky-500">Dashboard Home</p>
        </Link>
        <Link href="/dashboard/create">
          <p className="hover:text-sky-500">Create Course</p>
        </Link>
        <Link href="/dashboard/creations">
          <p className="hover:text-sky-500">Creations</p>
        </Link>
        <Link href="/dashboard/classes">
          <p className="hover:text-sky-500">Classes</p>
        </Link>
        <Link href="/dashboard/settings">
          <p className="hover:text-sky-500">Settings</p>
        </Link>
      </nav>
    </div>
  );
}
