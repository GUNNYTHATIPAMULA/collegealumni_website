import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen">

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />
      </div>

      {/* Overlay (Mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-100 bg-transparent bg-opacity-100 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="flex pt-16">


        {/* Main Content */}
        <div
          className={`
            flex-1 p-4 transition-all duration-300
          `}
        >
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default MainLayout