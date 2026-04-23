import React from 'react'
import Avator from './Avator'
import clglogo from '../assets/tkr-logo.webp'

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className='h-16 bg-blue-900 flex items-center fixed top-0 left-0 w-full z-50 px-4'>

      {/* Left Section */}
      <div className="flex items-center gap-3 w-full">

        {/* ☰ Hamburger (Mobile only) */}
        <button
          onClick={toggleSidebar}
          className="text-white text-2xl md:hidden"
        >
          ☰
        </button>

        {/* Logo */}
        <img className='h-10 w-24 object-contain' src={clglogo} alt="College Logo" />

        {/* Title */}
        <div className="hidden sm:block">
          <h1 className='font-semibold text-white text-sm md:text-lg leading-tight'>
            TEEGALA KRISHNA REDDY ENGINEERING COLLEGE
          </h1>
          <h4 className='text-white text-xs md:text-sm'>
            Alumni Portal
          </h4>
        </div>
      </div>

      {/* Right Section */}
      <div className="ml-auto cursor-pointer">
        <Avator />
      </div>

    </div>
  )
}

export default Navbar