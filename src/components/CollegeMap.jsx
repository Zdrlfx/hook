import React from "react";

const CollegeMap = () => {
  const buildings = [
    {
      name: "Building A",
      hall: "Hall 1",
      image: "/building-a.png", // Replace with actual image path
      coordinates: { top: "30%", left: "20%" }, // Adjust the percentage values
    },
    {
      name: "Building B",
      hall: "Hall 2",
      image: "/building-b.png", // Replace with actual image path
      coordinates: { top: "50%", left: "50%" }, // Adjust the percentage values
    },
    {
      name: "Building C",
      hall: "Hall 3",
      image: "/building-c.png", // Replace with actual image path
      coordinates: { top: "70%", left: "40%" }, // Adjust the percentage values
    },
  ];

  const handleBuildingClick = (building) => {
    alert(`You clicked on ${building.name}, associated with ${building.hall}!`);
    // You can navigate to another page or display more details here
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md relative">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">College Map</h1>
      <div className="relative w-full h-[600px]"> {/* Set a fixed height */}
        {/* Map Image */}
        <img
          src="/college map.png"
          alt="College Map"
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Interactive Buildings */}
        {buildings.map((building, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center cursor-pointer"
            style={{
              top: building.coordinates.top,
              left: building.coordinates.left,
            }}
            onClick={() => handleBuildingClick(building)}
          >
            {/* Building Image */}
            <img
              src={building.image}
              alt={building.name}
              className="w-16 h-16 object-cover rounded-full border-2 border-indigo-500 hover:scale-110 transition transform duration-200"
            />
            {/* Building Label */}
            <span className="mt-2 text-sm font-semibold text-gray-900">
              {building.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeMap;
