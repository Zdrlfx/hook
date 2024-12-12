import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false); // Hidden by default on small screens

  // Toggle function for mobile sidebar
  const toggleMobileSidebar = () =>
    setIsMobileSidebarOpen(!isMobileSidebarOpen);

  return (
    <div className="relative h-screen flex">
      {/* Sidebar: Static on large screens, toggled on small screens */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full bg-white shadow-md z-30 transition-transform duration-300 ${
          isMobileSidebarOpen
            ? "translate-x-0 w-64" // Mobile sidebar opens with full width
            : "-translate-x-full w-0" // Mobile sidebar hidden
        } lg:w-64 lg:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="p-4 flex items-center space-x-4">
          {/* Logo */}
          <img src="/logo.svg" alt="Logo" className="h-8 w-8 flex-shrink-0" />
          {/* Title */}
          <h1
            className={`text-2xl font-bold text-gray-800 ${
              isMobileSidebarOpen ? "block" : "hidden"
            } lg:block`}
          >
            Courseue
          </h1>
          {/* Arrow button to close sidebar on small screens */}
          {isMobileSidebarOpen && (
            <button
              onClick={toggleMobileSidebar}
              className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 lg:hidden"
            >
              ➤
            </button>
          )}
        </div>

        {/* Sidebar Content */}
        <div>
        <div
          className={`${
            isMobileSidebarOpen ? "block" : "hidden"
          } lg:block pl-10 pr-4`}
        >
          {/* Overview Section */}
          <h3 className="text-sm font-semibold text-gray-500 mt-4 mb-2">
            Overview
          </h3>
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md transition duration-200 ${
                    isActive
                      ? "text-indigo-500 border-l-4 border-indigo-500 bg-gray-100"
                      : "text-gray-800 hover:bg-gray-100 hover:border-indigo-500"
                  }`
                }
              >
                <span>📊</span> <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/halls"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md transition duration-200 ${
                    isActive
                      ? "text-indigo-500 border-l-4 border-indigo-500 bg-gray-100"
                      : "text-gray-800 hover:bg-gray-100 hover:border-indigo-500"
                  }`
                }
              >
                <span>📩</span> <span>Halls</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/booking"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md transition duration-200 ${
                    isActive
                      ? "text-indigo-500 border-l-4 border-indigo-500 bg-gray-100"
                      : "text-gray-800 hover:bg-gray-100 hover:border-indigo-500"
                  }`
                }
              >
                <span>📚</span> <span>My Bookings</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/form"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md transition duration-200 ${
                    isActive
                      ? "text-indigo-500 border-l-4 border-indigo-500 bg-gray-100"
                      : "text-gray-800 hover:bg-gray-100  hover:border-indigo-500"
                  }`
                }
              >
                <span>✅</span> <span>College Map</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/events"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md transition duration-200 ${
                    isActive
                      ? "text-indigo-500 border-l-4 border-indigo-500 bg-gray-100"
                      : "text-gray-800 hover:bg-gray-100 hover:border-indigo-500"
                  }`
                }
              >
                <span>👥</span> <span>Events</span>
              </NavLink>
            </li>
          </ul>
          </div>
          <div className="pl-10 pr-4 pt-36">
          {/* Settings Section */}
          <h3 className="text-sm font-semibold text-gray-500 mt-6 mb-2">
            Settings
          </h3>
          <ul className="space-y-4">
            <li className="text-red-500 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md transition duration-200">
              Logout
            </li>
          </ul>
          </div>
        </div>
      </aside>

      {/* Mobile Backdrop */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleMobileSidebar} // Close sidebar on click outside
        ></div>
      )}

      {/* Hamburger Menu for Small Screens */}
      {!isMobileSidebarOpen && (
        <button
          onClick={toggleMobileSidebar}
          className="lg:hidden fixed top-4 left-4 z-40 p-2 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          ☰
        </button>
      )}
    </div>
  );
};

export default Sidebar;
