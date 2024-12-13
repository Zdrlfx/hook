import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const RightSidebar = () => {
  const navigate = useNavigate();

  // Example events data
  const events = [
    { date: "2024-12-15", title: "Christmas Party", id: 1 },
    { date: "2024-12-20", title: "Annual Meetup", id: 2 },
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());

  // Check if a day has events
  const getTileClassName = ({ date, view }) => {
    if (view === "month") {
      const eventDates = events.map((event) =>
        new Date(event.date).toDateString()
      );
      if (eventDates.includes(date.toDateString())) {
        return "highlight";
      }
    }
    return null;
  };

  // Handle click on a day
  const handleDayClick = (value) => {
    const event = events.find(
      (e) => new Date(e.date).toDateString() === value.toDateString()
    );
    if (event) {
      navigate(`/events/${event.id}`); // Redirect to event details page
    }
  };

  return (
    <div className="w-full bg-white shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Calendar</h2>
      {/* Calendar Component */}
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileClassName={getTileClassName}
        onClickDay={handleDayClick}
      />

      {/* Upcoming Events Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-gray-100 p-3 rounded-lg shadow-sm mb-2 cursor-pointer hover:bg-gray-200"
            onClick={() => navigate(`/events/${event.id}`)}
          >
            <p className="font-medium">{event.title}</p>
            <p className="text-sm text-gray-600">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
