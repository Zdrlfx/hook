import React, { useState } from "react";
import { Link } from "react-router-dom";

const HallDetails = ({ hall }) => {
  // Simulated hall data
  const hallsData = {
    "Hall 1": {
      name: "Hall 1",
      capacity: "120 People",
      location: "Block A",
      availability: "Available 7 days a week",
      price: "$200/hr",
      description:
        "Our flagship venue perfect for conferences, performances, and large ceremonies.",
      image: "/Hall 1.png",
      seatingImage: "/hall1graphics.png",
    },
    "Hall 2": {
      name: "Hall 2",
      capacity: "80 People",
      location: "Block B",
      availability: "Available weekdays only",
      price: "$150/hr",
      description: "Ideal for small meetings and workshops.",
      image: "/Hall 2.png",
      seatingImage: "/hall2graphics.png",
    },
    // Add more halls as needed
  };

  // Fetch hall data based on the `hall` prop
  const hallData = hallsData[hall] || hallsData["Hall 1"]; // Default to Hall 1 if `hall` is undefined

  const [showSeating, setShowSeating] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={hallData.image}
            alt={hallData.name}
            className="w-full h-auto rounded-lg shadow"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start pl-6">
          <h1 className="text-2xl font-bold text-gray-900">{hallData.name}</h1>
          <p className="text-gray-600 text-sm mt-2">
            <span className="font-semibold">Capacity:</span> {hallData.capacity}
          </p>
          <p className="text-gray-600 text-sm mt-1">
            <span className="font-semibold">Location:</span> {hallData.location}
          </p>
          <p className="text-gray-600 text-sm mt-1">
            <span className="font-semibold">Availability:</span>{" "}
            {hallData.availability}
          </p>
          <p className="text-gray-600 text-sm mt-1">
            <span className="font-semibold">Price:</span> {hallData.price}
          </p>

          {/* Buttons beside the image */}
          <div className="flex mt-4 space-x-4">
            <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-500">
              View in Map
            </button>
            <button
              className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-500"
              onClick={() => setShowSeating(true)}
            >
              View Seating
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">Description</h2>
        <p className="text-gray-600 mt-4">{hallData.description}</p>
      </div>

      {/* Book Now Button */}
      <div className="mt-10">
        <Link to="/dashboard/form">
          <button className="w-full px-4 py-3 border border-indigo-500 text-indigo-500 text-lg font-semibold rounded-md hover:bg-indigo-100">
            Book Now
          </button>
        </Link>
      </div>

      {/* Seating Modal */}
      {showSeating && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Seating Arrangement
            </h3>
            <img
              src={hallData.seatingImage}
              alt={`${hallData.name} Seating`}
              className="w-full h-auto rounded-lg"
            />
            <button
              className="mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-500"
              onClick={() => setShowSeating(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HallDetails;
