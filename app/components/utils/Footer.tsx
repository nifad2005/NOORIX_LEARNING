import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Noorix Learning</h2>
            <p className="text-slate-400">Empowering you with knowledge and skills for a brighter future.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="/">
              <h1 className="hover:text-sky-500">Home</h1>
            </Link>
            <Link href="/courses">
              <h1 className="hover:text-sky-500">Courses</h1>
            </Link>
            <Link href="/category">
              <h1 className="hover:text-sky-500">Categories</h1>
            </Link>
            <Link href="/about">
              <h1 className="hover:text-sky-500">About Us</h1>
            </Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Noorix Learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;