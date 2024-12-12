import React from 'react';

const Booking = ({ booking }) => {
  if (!booking) {
    return (
      <div className="w-full h-full flex items-center justify-center flex-col">
        <img
          src="/nobooking.svg"
          alt="nothing"
          className="w-1/3 h-auto -translate-y-6"
        />
        <p className="text-xl font-bold mt-5 text-gray-600">No Bookings Made.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
      <p className="text-lg">
        <strong>Status:</strong> {booking.status}
      </p>
      <p className="text-lg">
        <strong>Event Name:</strong> {booking.eventName}
      </p>
      <p className="text-lg">
        <strong>Date:</strong> {booking.eventDate}
      </p>
      <p className="text-lg">
        <strong>Time:</strong> {booking.startTime} - {booking.endTime}
      </p>
    </div>
  );
};

export default Booking;
