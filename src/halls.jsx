import React, { useState } from "react";

const Hall = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile toggle
  const [isCollapsed, setIsCollapsed] = useState(false); // For desktop collapse

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-md transition-all duration-300 z-20 lg:static lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } ${isCollapsed ? "w-16" : "w-64"}`}
      >
        {/* Collapse Button */}
        <div className="flex items-center justify-between p-4 border-b">
          <button
            onClick={toggleCollapse}
            className="p-2 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            {isCollapsed ? "➤" : "◀"}
          </button>
        </div>
      </aside>

      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-gray-200 hover:bg-gray-300"
        onClick={toggleSidebar}
      >
        Menu
      </button>
    </>
  );
};

export default Hall;

