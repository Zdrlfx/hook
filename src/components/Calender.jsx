import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StaticDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const RightSidebar = () => {
  const navigate = useNavigate();

  // Example events data
  const events = [
    { date: "2024-12-15", title: "Christmas Party", id: 1 },
    { date: "2024-12-20", title: "Annual Meetup", id: 2 },
  ];

  const [selectedDate, setSelectedDate] = useState(dayjs());

  // Function to check if a day has events
  const getDayContent = (date) => {
    const hasEvent = events.some(
      (event) => dayjs(event.date).isSame(date, "day")
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

    const event = events.find((e) =>
      dayjs(e.date).isSame(newValue, "day")
    );
    if (event) {
      navigate(`/events/${event.id}`); // Redirect to event details
    }
  };

  return (
    <div className="flex flex-col w-full h-full px-4 py-6">
      {/* Calendar Section */}
      <h1 className="text-lg font-semibold mb-4">Calendar</h1>
      <div className="flex items-center justify-center">
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
    </div>
  );
};

export default RightSidebar;
