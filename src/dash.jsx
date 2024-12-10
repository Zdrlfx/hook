import React from "react";
import Sidebar from "./sidebar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
        <Layout />
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Sharpen Your Skills</h1>
            <p className="text-gray-500">With Professional Online Courses</p>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search your course..."
              className="px-4 py-2 border rounded-md shadow-sm focus:outline-indigo-500"
            />
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Dashboard Cards */}
        <section className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-indigo-500 text-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">UI/UX Design</h2>
            <p>2/8 watched</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">Branding</h2>
            <p>3/8 watched</p>
          </div>
          <div className="bg-purple-500 text-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">Front End</h2>
            <p>6/12 watched</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="mt-6">
          <h2 className="text-xl font-bold">Continue Watching</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold">Becoming a Professional Front-End Developer</h3>
              <p className="text-gray-500">By Leonardo Samsul</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold">Optimizing User Experience</h3>
              <p className="text-gray-500">By Bayu Salto</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold">Refreshing Company Image</h3>
              <p className="text-gray-500">By Padang Satrio</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
