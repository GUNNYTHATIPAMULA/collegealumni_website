import React, { useState } from 'react';
import { Menu, X, Home, Users, Calendar, Briefcase, User, LogOut } from 'lucide-react';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const navItems = [
    { icon: Home, label: 'Dashboard', href: '#' },
    { icon: Users, label: 'All Alumni', href: '#' },
    { icon: Calendar, label: 'Events', href: '#' },
    { icon: Briefcase, label: 'Job Openings', href: '#' },
    { icon: User, label: 'Profile', href: '#' },
  ];

  return (
    <>
     

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white shadow-sm overflow-auto z-50 transition-all duration-300 ease-in-out
          flex flex-col
          ${isOpen ? 'w-64' : 'w-0 md:w-20'}
          overflow-hidden
          md:relative md:translate-x-0
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className={`flex items-center gap-2 ${!isOpen && 'md:hidden'}`}>
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TK</span>
            </div>
            <span className={`font-semibold text-gray-800 transition-opacity duration-200 ${!isOpen && 'md:opacity-0 md:invisible'}`}>
              Alumni Portal
            </span>
          </div>
        </div>

        {/* User Info Section */}
        <div className={`p-4 border-b border-gray-200 ${!isOpen && 'md:px-2'}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
              J
            </div>
            <div className={`transition-opacity duration-200 ${!isOpen && 'md:opacity-0 md:invisible md:w-0'}`}>
              <p className="font-medium text-gray-800">Jenkins '18</p>
              <p className="text-xs text-gray-500">Software Engineer</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 py-6">
          <ul className="space-y-2 px-3">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors group"
                  title={!isOpen ? item.label : ''}
                >
                  <item.icon size={20} className="flex-shrink-0" />
                  <span className={`transition-opacity duration-200 ${!isOpen && 'md:opacity-0 md:invisible md:absolute'}`}>
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Actions Section */}
        <div className={`p-4 border-t border-gray-200 ${!isOpen && 'md:px-2'}`}>
          <p className={`text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 transition-opacity duration-200 ${!isOpen && 'md:opacity-0 md:invisible'}`}>
            Quick Actions
          </p>
          <div className="space-y-2">
            <button className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors ${!isOpen && 'md:justify-center'}`}>
              <Briefcase size={18} />
              <span className={`text-sm font-medium transition-opacity duration-200 ${!isOpen && 'md:opacity-0 md:invisible md:absolute'}`}>
                Post a Job
              </span>
            </button>
            <button className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors ${!isOpen && 'md:justify-center'}`}>
              <Calendar size={18} />
              <span className={`text-sm font-medium transition-opacity duration-200 ${!isOpen && 'md:opacity-0 md:invisible md:absolute'}`}>
                Schedule Mentoring
              </span>
            </button>
            <button className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors ${!isOpen && 'md:justify-center'}`}>
              <User size={18} />
              <span className={`text-sm font-medium transition-opacity duration-200 ${!isOpen && 'md:opacity-0 md:invisible md:absolute'}`}>
                Update Contact
              </span>
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <div className={`p-4 border-t border-gray-200 ${!isOpen && 'md:px-2'}`}>
          <button className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors ${!isOpen && 'md:justify-center'}`}>
            <LogOut size={20} />
            <span className={`transition-opacity duration-200 ${!isOpen && 'md:opacity-0 md:invisible md:absolute'}`}>
              Logout
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default SideBar;