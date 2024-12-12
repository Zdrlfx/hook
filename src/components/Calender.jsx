import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StaticDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { events } from "./Events"; // Import events data

const RightSidebar = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(dayjs());

  // Filter events for the selected date
  const eventsForDate = events.filter((event) =>
    dayjs(event.date).isSame(selectedDate, "day")
  );

  // Function to check if a day has events
  const getDayContent = (date) => {
    const hasEvent = events.some((event) =>
      dayjs(event.date).isSame(date, "day")
    );

    return hasEvent ? (
      <div className="relative">
        <span className="absolute w-2 h-2 rounded-full bg-blue-500 top-0 right-0"></span>
        {date.date()}
      </div>
    ) : (
      date.date()
    );
  };

  // Handle date click
  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };

  return (
    <div className="flex flex-col w-full h-full px-4 py-6">
      {/* Calendar Section */}
      <h1 className="text-lg font-semibold mb-4">Calendar</h1>
      <div className="flex items-center justify-center mb-4">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={selectedDate}
            onChange={handleDateChange}
            renderDay={(day, _value, DayComponentProps) => (
              <div {...DayComponentProps} className="text-center">
                {getDayContent(day)}
              </div>
            )}
            componentsProps={{
              actionBar: { className: "hidden" }, // Removes unnecessary buttons
            }}
            sx={{
              "& .MuiPickersBasePicker-root": {
                backgroundColor: "#f5f5f5", // Gray background for the calendar itself
                borderRadius: "12px", // Rounded corners
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
              },
              "& .Mui-selected": {
                backgroundColor: "#6366F1", // Indigo for selected date
                color: "white",
              },
              "& .MuiDayPicker-weekContainer": {
                justifyContent: "center",
              },
            }}
          />
        </LocalizationProvider>
      </div>

  {/* Event List Section */}
<h2 className="text-md font-semibold mb-2">
  Events on {selectedDate.format("YYYY-MM-DD")}
</h2>
<div className="space-y-2">
  {eventsForDate.length > 0 ? (
    eventsForDate.map((event) => (
      <div
        key={event.id}
        className="flex items-center p-4 bg-white shadow-md rounded-lg border border-gray-200 "
      >
        {/* Event Information */}
        <div className="ml-4">
          <h3 className="text-sm font-bold">{event.title}</h3>
          <p className="text-xs text-gray-500">⏰<span>{event.time}</span></p>
          <p className="text-xs text-gray-500">📍<span>{event.hall}</span></p>
        </div>
        
      </div>
    ))
  ) : (
    <p className="text-sm text-gray-500">No events for this date.</p>
  )}
</div>
    </div>
  );
};

export default RightSidebar;
