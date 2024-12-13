import React from "react";

const Booking = ({ formData }) => {
  if (!formData) {
    return (
      <div className="w-full h-full flex items-center justify-center flex-col">
        <img src="/nobooking.svg" alt="No Booking" className="w-1/3 h-auto" />
        <p className="text-xl font-bold mt-5 text-gray-600">
          No Bookings Made.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8 mt-6">
      <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-start">
        <div>
          <p>
            <strong>Event Name:</strong> {formData.eventName}
          </p>
          <p>
            <strong>Phone:</strong> {formData.phone}
          </p>
          <p>
            <strong>Date:</strong> {formData.eventDate}
          </p>
          <p>
            <strong>Time:</strong> {formData.startTime} - {formData.endTime}
          </p>
          <p>
            <strong>Attendees:</strong> {formData.attendees}
          </p>
          <p>
            <strong>Hall:</strong> {formData.hall}
          </p>
          <p>
            <strong>Additional Info:</strong> {formData.additionalInfo}
          </p>
        </div>
        {/* <div className="ml-4 p-2 bg-blue-100 rounded-md shadow-md">
          <p className="text-center text-lg font-semibold">
            Status: {formData.status || "Pending"}
          </p>
        </div> */}
        {/* <div className="ml-4 p-2 bg-red-100 rounded-md shadow-md">
          <p className="text-center text-lg font-semibold">
            Status: {formData.status || "Rejected"}
          </p>
        </div> */}
        <div className="ml-4 p-2 bg-green-100 rounded-md shadow-md">
          <p className="text-center text-lg font-semibold">
            Status: {formData.status || "Approved"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
