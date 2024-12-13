import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GeneralBookingForm = ({ setFormData }) => {
  const [localFormData, setLocalFormData] = useState({
    phone: "",
    eventName: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    attendees: "",
    hall: "",
    additionalInfo: "",
  });

  const halls = ["Hall 1", "Hall 2", "Hall 3", "Hall 4"];
  const user = {
    name: "Sweta Suwal",
    avatar: "/avatar.png",
  };

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({ ...localFormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(localFormData); // Update shared state
    alert("Booking request submitted!");
    navigate("/booking"); // Navigate to Booking page
  };

  return (
    <div className="container mx-auto px-8 flex justify-center">
      <div className="w-full bg-white p-6 rounded-3xl shadow-md overflow-y-hidden">
        <h1 className="text-3xl font-bold text-center mb-3">Book a Hall</h1>
        <div className="flex items-center mb-6">
          <Avatar src={user.avatar} alt={user.name} className="mr-4" />
          <div>
            <p className="text-gray-500 text-sm">Booking as:</p>
            <p className="font-medium text-lg">{user.name}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input fields */}
          {/* Example input */}
          <div>
            <label
              htmlFor="eventName"
              className="block text-gray-700 font-medium"
            >
              Event Name
            </label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={localFormData.eventName}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded-md"
              required
            />
          </div>
          {/* Add other fields */}
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
