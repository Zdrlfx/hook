import React from "react";

const events = [
  {
    id: 1,
    title: "Psychological First Aid",
    description: "Learn to provide psychological first aid to people in an emergency.",
    hall: "Hall 1",
    date: "2024-12-14",
    time: "03:00 PM",
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "The goal of this specialization is to equip learners with a set of design skills.",
    hall: "Hall 2",
    date: "2024-12-14",
    time: "11:00 AM",
  },
  {
    id: 3,
    title: "Hult Prize: Perfect Pitch Workshop",
    description: "The goal of this workshop is to equip learners with a set of Presentation skills.",
    hall: "Hall 1",
    date: "2024-12-15",
    time: "1:00 PM",
  },
];

const EventCard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Upcoming Events</h1>
      <div className="flex flex-col space-y-6">
        {events.map((event) => {
          // Extract date parts
          const date = new Date(event.date);
          const day = date.getDate();
          const month = date.toLocaleString("default", { month: "long" }).toUpperCase();

          return (
            <div
              key={event.id}
              className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Date Section */}
              <div className="flex items-center justify-center bg-indigo-400 text-white text-center w-full sm:w-28 flex-shrink-0 py-4 sm:py-0">
                <div>
                  <span className="block text-3xl font-bold">{day}</span>
                  <span className="block text-lg font-semibold">{month}</span>
                </div>
              </div>

              {/* Event Details */}
              <div className="flex-1 px-4 py-4 sm:py-6">
                <h2 className="text-lg font-bold text-gray-900">{event.title}</h2>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{event.description}</p>
                <p className="text-sm text-gray-500 mt-1">
                  📍 <span>{event.hall}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">⏰ {event.time}</p>
              </div>

              {/* View Details Link */}
              <div className="px-4 py-4 sm:py-6">
                <a
                  href={`/events/${event.id}`}
                  className="text-indigo-500 hover:underline text-sm font-medium"
                >
                  View Details
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCard;
