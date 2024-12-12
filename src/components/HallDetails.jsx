import React from "react";

const HallDetails = ({ hall }) => {
  // Mock data for now; replace with your dynamic data.
  const hallData = hall || {
    name: "Hall 1",
    capacity: "500 People",
    location: "Main Campus, Building A",
    availability: "Available 7 days a week",
    price: "$200/hr",
    description:
      "Our flagship venue perfect for conferences, performances, and large ceremonies.",
    image: "https://via.placeholder.com/400x300", // Replace with your hall images
  };

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

          {/* Buttons beside the image */}
          <div className="flex mt-4 space-x-4">
            <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-500">
              View in Map
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-500">
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
        <button className="w-full px-4 py-3 border border-indigo-500 text-indigo-500 text-lg font-semibold rounded-md hover:bg-indigo-100">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HallDetails;
