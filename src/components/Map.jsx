import React, { useState } from "react";
import { Avatar } from "@mui/material";

const GeneralBookingForm = () => {
  const [formData, setFormData] = useState({
    phone: "",
    eventName: "",
    eventDate: "",
    eventTime: "",
    attendees: "",
    hall: "",
    additionalInfo: "",
  });

  const halls = ["Conference Hall", "Banquet Hall", "Auditorium"];
  const user = {
    name: "John Doe", // Example user
    avatar: "/avatar.png", // Replace with your avatar path
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Form Data:", formData);
    alert("Booking request submitted!");
  };

  return (
    <div className="container mx-auto px-8 flex justify-center ">
      <div className="w-full bg-white p-6 rounded-3xl shadow-md overflow-y-hidden">
        <h1 className="text-3xl font-bold text-center mb-3">Book a Hall</h1>

        {/* Booking as Section */}
        <div className="flex items-center mb-6">
          <Avatar src={user.avatar} alt={user.name} className="mr-4" />
          <div>
            <p className="text-gray-500 text-sm">Booking as:</p>
            <p className="font-medium text-lg">{user.name}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Event Name and Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="eventName" className="block text-gray-700 font-medium">
                Event Name
              </label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                value={formData.eventName}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Enter event name"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          {/* Event Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="eventDate" className="block text-gray-700 font-medium">
                Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="eventTime" className="block text-gray-700 font-medium">
                Event Time
              </label>
              <input
                type="time"
                id="eventTime"
                name="eventTime"
                value={formData.eventTime}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Expected Number of Attendees and Hall Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="attendees" className="block text-gray-700 font-medium">
                Expected Number of Attendees
              </label>
              <input
                type="number"
                id="attendees"
                name="attendees"
                value={formData.attendees}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Enter number of attendees"
                required
              />
            </div>
            <div>
              <label htmlFor="hall" className="block text-gray-700 font-medium">
                Choose a Hall
              </label>
              <select
                id="hall"
                name="hall"
                value={formData.hall}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              >
                <option value="" disabled>
                  Select a hall
                </option>
                {halls.map((hall, index) => (
                  <option key={index} value={hall}>
                    {hall}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <label htmlFor="additionalInfo" className="block text-gray-700 font-medium">
              Event Details
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Describe your event, including any technical requirements or special requests."
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-medium py-2 rounded-md hover:bg-[#fa4b6e]"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default GeneralBookingForm;
