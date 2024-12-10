import React from 'react'
import { Link } from 'react-router-dom';

const overviewItems = [
  { name: "Home", icon: "📊", link: "/" },
  { name: "Explore Halls", icon: "📩", link: "/halls" },
  { name: "My bookings", icon: "📚", link: "/booking" },
  { name: "Campus Map", icon: "✅", link: "/map" },
  { name: "Upcoming Events", icon: "👥", link: "/events" },
];

const Sidebar = () => {
  return (
    <div>
       <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className=" flex items-center space-x-2 mx-5">
        <img
              src="../public/Asset 4.svg" 
              alt="Logo"
              className="w-8 h-8"
            />
          <div className="p-3 text-xl font-bold ">Hook</div>
        </div>
        <nav className="flex-1 px-4">
          <h3 className="text-xs font-semibold text-gray-400 uppercase mb-4">
            Overview
          </h3>
          <ul className="space-y-2">
            {overviewItems.map((item, index) => (
              <li key={index} className="flex items-center space-x-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <span className="text-indigo-500">{item.icon}</span>
                <Link to={item.link} className="font-medium">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
      </nav>
        <div className="px-4 py-6 border-t mt-auto">
          <button className="w-full text-left text-red-500 font-medium hover:bg-gray-200 rounded-md py-2">
            Logout
          </button>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
