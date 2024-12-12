import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Halls from "./Halls";
import Booking from "./Booking";
import GeneralBookingForm from "./Map";
import Events from "./Events";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Calender from "./Calender";
import HallDetails from "./HallDetails";
import CollegeMap from "./CollegeMap";

const Layout = () => {
  const [formData, setFormData] = useState(null); // Shared state for booking data

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="bg-gray-50 flex-1 flex flex-col align-center">
        <Navbar />
        <div className="flex-1 flex flex-row justify-between align-center">
          <div className="w-3/4 flex flex-col items-center md:items-start px-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="halls" element={<Halls />} />
              <Route path="halls/:hallId" element={<HallDetails />} />
              <Route
                path="booking"
                element={<Booking formData={formData} />} // Pass formData as prop
              />
              <Route
                path="form"
                element={<GeneralBookingForm setFormData={setFormData} />} // Pass setFormData to update state
              />
              <Route path="events" element={<Events />} />
              <Route path="college-map" element={<CollegeMap />} /> {/* New Route */}
            </Routes>
          </div>
          <div className="w-1/4 hidden lg:block">
            <Calender />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
