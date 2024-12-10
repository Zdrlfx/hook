import React, { useState } from "react";

const Sidebar = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false); // Hidden by default on small screens

  // Toggle function for mobile sidebar
  const toggleMobileSidebar = () => setIsMobileSidebarOpen(!isMobileSidebarOpen);

  return (
    <div className="relative h-screen flex">
      {/* Sidebar: Static on large screens, toggled on small screens */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full bg-white shadow-md z-30 transition-transform duration-300 ${
          isMobileSidebarOpen
            ? "translate-x-0 w-64" // Mobile sidebar opens with full width
            : "-translate-x-full w-0" // Mobile sidebar hidden
        } lg:w-64 lg:translate-x-0`} // Static on large screens
      >
        {/* Sidebar Header */}
        <div
          className={`p-4 border-b flex justify-between ${
            isMobileSidebarOpen ? "block" : "hidden"
          } lg:block`}
        >
          <h1 className="text-lg font-bold">Menu</h1>
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
        <div
          className={`px-4 py-6 ${
            isMobileSidebarOpen ? "block" : "hidden"
          } lg:block`}
        >
          <ul className="space-y-4">
            <li>Home</li>
            <li>Explore Halls</li>
            <li>My Bookings</li>
            <li>Campus Map</li>
            <li>Upcoming Events</li>
          </ul>
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

      {/* Main Content */}
      <div className="flex-1 flex  justify-center lg:ml-16 sm:ml-11">
        <div className="p-6 max-w-3xl bg-gray-100 shadow-md rounded-md">
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p>
            The sidebar remains static on larger screens. On mobile devices, the
            sidebar can be toggled with the hamburger menu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
