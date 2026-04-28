import React, { useState } from 'react';
import {
  Menu, X, Home, Users, Calendar, Briefcase, User, LogOut, Award, GraduationCap
  , Heart, Settings, FileText, Bell
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };
  const navigate = useNavigate()
  const user_role = "alumni";
  const navConfig = {
    admin: [

      { icon: Home, label: 'Dashboard', href: '#' },
      { icon: Users, label: 'All Alumni', href: '#' },
      { icon: Calendar, label: 'Events', href: '#' },
      { icon: Briefcase, label: 'Job Openings', href: '#' },
      { icon: User, label: 'Profile', href: '#' },
    ],
    alumni: [
      { icon: Home, label: 'Dashboard', href: '/alumnidashboard' },
      { icon: User, label: 'My Profile', href: '/profile' },
      { icon: Users, label: 'Alumni Directory', href: '/allalumni' },
      { icon: Briefcase, label: 'Job Portal', href: '/jobs' },
      { icon: GraduationCap, label: 'Mentorship', href: '/mentorship' },
      { icon: FileText, label: 'Career Resources', href: '/resources' },
      { icon: Calendar, label: 'Events & Reunions', href: '/events' },
      { icon: Award, label: 'Alumni Spotlights', href: '/spotlights' },
      { icon: Heart, label: 'Giving Back', href: '/contribute' },
      { icon: Settings, label: 'Settings', href: '/settings' },
      { icon: Bell, label: 'Notifications', href: '/notifications' },
    ],
    student: [
      { icon: Home, label: 'Dashboard', href: '#' },
      { icon: Users, label: 'All Alumni', href: '#' },
      { icon: Calendar, label: 'Events', href: '#' },
      { icon: Briefcase, label: 'Job Openings', href: '#' },
      { icon: User, label: 'Profile', href: '#' },
    ]
  }
  const navItems = navConfig[user_role] || []
  return (
    <>


      {/* Sidebar */}
      < aside
        className={`
          fixed top-0 left-0 h-full bg-blue-900 shadow-sm text-white overflow-auto z-50 transition-all duration-300 ease-in-out
          flex flex-col
          ${isOpen ? 'w-64' : 'w-0 md:w-20'}
          overflow-hidden
          md:relative md:translate-x-0 
        `}
      >
        {/* User Info Section */}
        < div className={`p-4 border-b border-gray-200  ${!isOpen && 'md:px-2'}`}>
          <div className="flex items-center gap-3 ">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
              {User.name || "u"}
            </div>
            <div className={`transition-opacity duration-200 ${!isOpen && 'md:opacity-0 md:invisible md:w-0'}`}>
              <p className="font-medium text-white">{User.fullname || "Jenkins   '18"}</p>
              <p className="text-xs text-white">Software Engineer</p>
            </div>
          </div>
        </div >

        {/* Navigation Links */}
        < nav className="flex-1 py-6 overflow-auto" >
          <ul className="space-y-2 px-3">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => navigate(item.href)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-indigo-50 w-full hover:text-indigo-600 transition-colors group"
                  title={!isOpen ? item.label : ''}
                >
                  <item.icon size={20} className="flex-shrink-0" />
                  <span className={`transition-opacity duration-200 ${!isOpen && 'md:opacity-0 md:invisible md:absolute'}`}>
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav >

        {/* Quick Actions Section */}
        < div className={`p-4 border-t border-gray-200 ${!isOpen && 'md:px-2'}`}>
          <p className={`text-xs font-semibold text-white uppercase tracking-wider mb-3 transition-opacity duration-200 ${!isOpen && 'md:opacity-0 md:invisible'}`}>
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
        </div >

        {/* Logout Button */}
        < div className={`p-4 border-t border-gray-200 ${!isOpen && 'md:px-2'}`}>
          <button className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-gray-100 transition-colors ${!isOpen && 'md:justify-center'}`}>
            <LogOut size={20} />
            <span className={`transition-opacity duration-200 ${!isOpen && 'md:opacity-0 md:invisible md:absolute'}`}>
              Logout
            </span>
          </button>
        </div >
      </aside >
    </>
  );
};

export default SideBar;