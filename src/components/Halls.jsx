import React from "react";

const halls = [
  {
    name: "Conference Hall",
    capacity: "100 People",
    image: "https://via.placeholder.com/400x600", // Replace with your hall images
  },
  {
    name: "Banquet Hall",
    capacity: "200 People",
    image: "https://via.placeholder.com/400x600", // Replace with your hall images
  },
  {
    name: "Auditorium",
    capacity: "500 People",
    image: "https://via.placeholder.com/400x600", // Replace with your hall images
  },
];

const Halls = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Available Halls</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {halls.map((hall, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center h-96 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
            style={{ backgroundImage: `url(${hall.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
              <h2 className="text-xl font-bold mb-2">{hall.name}</h2>
              <p className="mb-4 text-sm">Capacity: {hall.capacity}</p>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-medium">
                Book Hall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Halls;
