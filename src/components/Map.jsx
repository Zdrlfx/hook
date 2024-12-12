import React from "react";
import { Avatar } from "@mui/material";

const GeneralBookingForm = ({ setFormData }) => {
  const halls = ["Hall 1", "Hall 2", "Hall 3", "Hall 4"];
  const user = {
    name: "John Doe",
    avatar: "/avatar.png",
  };

  // Local form state for controlled inputs
  const [localFormData, setLocalFormData] = React.useState({
    phone: "",
    eventName: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    attendees: "",
    hall: "",
    additionalInfo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...localFormData, [name]: value };
    setLocalFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(localFormData); // Update the shared state via parent
    alert("Booking request submitted!");
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="eventName" className="block text-gray-700 font-medium">
                Event Name
              </label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                value={localFormData.eventName}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md"
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
                value={localFormData.phone}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter your phone number"
                required
              />
            </div>
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
                value={localFormData.eventDate}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="startTime" className="block text-gray-700 font-medium">
                Start Time
              </label>
              <input
                type="time"
                id="startTime"
                name="startTime"
                value={localFormData.startTime}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="endTime" className="block text-gray-700 font-medium">
                End Time
              </label>
              <input
                type="time"
                id="endTime"
                name="endTime"
                value={localFormData.endTime}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="attendees" className="block text-gray-700 font-medium">
                Expected Number of Attendees
              </label>
              <input
                type="number"
                id="attendees"
                name="attendees"
                value={localFormData.attendees}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md"
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
                value={localFormData.hall}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded-md"
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
          <div>
            <label htmlFor="additionalInfo" className="block text-gray-700 font-medium">
              Event Details
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={localFormData.additionalInfo}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Describe your event."
              rows="4"
            />
          </div>
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
