import React from "react";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const halls = [
  {
    id:"hall1",
    name: "Hall 1",
    capacity: "500 People",
    location: "Main Campus, Building A",
    availability: "Available 7 days a week",
    price: "$200/hr",
    description:
      "Our flagship venue perfect for conferences, performances, and large ceremonies.",
    image: "https://via.placeholder.com/400x300", // Replace with your hall images
  },
  {
    id:"hall2",
    name: "Hall 2",
    capacity: "300 People",
    location: "South Wing, Building B",
    availability: "Available weekdays",
    price: "$150/hr",
    description: "Ideal for weddings, parties, and other celebratory events.",
    image: "https://via.placeholder.com/400x300", // Replace with your hall images
  },
  {
    id:"hall3",
    name: "Hall 3",
    capacity: "50 People",
    location: "East Wing, Building C",
    availability: "Available on-demand",
    price: "$100/hr",
    description: "Perfect for corporate meetings and small workshops.",
    image: "https://via.placeholder.com/400x300", // Replace with your hall images
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
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Hall Image */}
            <div className="relative h-64">
              <img
                src={hall.image}
                alt={hall.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Hall Details */}
            <div className="p-4 h-32 flex flex-col justify-between">
              <h2 className="text-lg font-bold">{hall.name}</h2>
              <p className="text-xs text-gray-600">{hall.description}</p>

              <div className="text-xs text-gray-500 flex items-center mt-2">
                <span className="mr-2">👤</span> Capacity: {hall.capacity}
              </div>
              <div className="text-xs text-gray-500 flex items-center mt-1">
                <span className="mr-2">📍</span> {hall.location}
              </div>
            </div>

            {/* Call to Action */}
           
<div className="p-4">
  <Link
    to={`/dashboard/halls/${hall.id}`}
    className="w-full inline-block px-4 py-2 bg-indigo-500 text-white text-center rounded-lg hover:bg-indigo-600"
  >
    View Details
  </Link>
</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Halls;
