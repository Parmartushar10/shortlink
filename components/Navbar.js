"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='h-16 bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 text-white flex items-center justify-between shadow-2xl border-b border-gray-700 relative z-50'>
      <div className="logo text-2xl md:text-3xl font-bold absolute left-4 md:left-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        <Link href="/" className="hover:from-blue-300 hover:to-purple-400 transition-all duration-300">
          ShortLink
        </Link>
      </div>
      
      {/* Desktop Menu */}
      <ul className='hidden lg:flex font-semibold justify-center items-center gap-8 absolute right-10'>
        <Link href="/" className="hover:text-blue-400 transition-colors duration-200 hover:scale-105 transform">
          <li>Home</li>
        </Link>
        <Link href="/about" className="hover:text-blue-400 transition-colors duration-200 hover:scale-105 transform">
          <li>About</li>
        </Link>
        <Link href="/shorten" className="hover:text-blue-400 transition-colors duration-200 hover:scale-105 transform">
          <li>Shorten</li>
        </Link>
        <Link href="/contact" className="hover:text-blue-400 transition-colors duration-200 hover:scale-105 transform">
          <li>Contact Us</li>
        </Link>
        {/* <li className='flex gap-3'>
          <Link href="/github">
            <button className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg px-4 py-2 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-blue-500/30'>
              GitHub
            </button>
          </Link>
        </li> */}
      </ul>

      {/* Mobile Menu Button */}
      <div className="lg:hidden absolute right-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-blue-400 transition-colors duration-200 p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-16 left-0 w-full bg-gradient-to-b from-slate-900 to-gray-800 shadow-2xl border-t border-gray-700 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className='flex flex-col font-semibold py-4'>
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:bg-gray-700/50 px-6 py-3 hover:text-blue-400 transition-all duration-200">
            <li>Home</li>
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:bg-gray-700/50 px-6 py-3 hover:text-blue-400 transition-all duration-200">
            <li>About</li>
          </Link>
          <Link href="/shorten" onClick={() => setIsOpen(false)} className="hover:bg-gray-700/50 px-6 py-3 hover:text-blue-400 transition-all duration-200">
            <li>Shorten</li>
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:bg-gray-700/50 px-6 py-3 hover:text-blue-400 transition-all duration-200">
            <li>Contact Us</li>
          </Link>
          <li className='px-6 py-3'>
            <Link href="/github" onClick={() => setIsOpen(false)}>
              <button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg px-4 py-2 rounded-lg font-bold transition-all duration-300 border border-blue-500/30'>
                GitHub
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar