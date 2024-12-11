import React, { useState } from "react";
import { Avatar } from "@mui/material";

const GeneralBookingForm = () => {
  const [formData, setFormData] = useState({
    email: "",
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
    <div className="h-screen flex justify-center items-center">
      <div className="w-full h-full bg-white overflow-y-auto">
        <div className="flex items-center">
          <Avatar src={user.avatar} alt={user.name} className="mr-4" />
          <div>
            <p className="text-gray-500 text-sm">Booking as:</p>
            <p className="font-medium text-lg">{user.name}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          {/* Contact Info */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your email"
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
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Event Details */}
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
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter event name"
              required
            />
          </div>

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
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
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
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
          </div>

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
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter number of attendees"
              required
            />
          </div>

          {/* Hall Selection */}
          <div>
            <label htmlFor="hall" className="block text-gray-700 font-medium">
              Choose a Hall
            </label>
            <select
              id="hall"
              name="hall"
              value={formData.hall}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
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

          {/* Additional Info */}
          <div>
            <label htmlFor="additionalInfo" className="block text-gray-700 font-medium">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter any specific requests or requirements"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default GeneralBookingForm;
