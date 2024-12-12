import React from "react";
import { useParams } from "react-router-dom";

const HallDetails = () => {
  const { hallId } = useParams();

  // Mock data for demonstration (Replace this with API call or state)
  const halls = [
    {
      id: "hall1",
      name: "Grand Auditorium",
      description: "Perfect for large events with 500+ capacity.",
      location: "Main Campus, Building A",
      price: "$200/hr",
    },
    {
      id: "hall2",
      name: "Banquet Hall",
      description: "Ideal for medium-sized events.",
      location: "Main Campus, Building B",
      price: "$150/hr",
    },
  ];

  // Find the hall data based on the hallId
  const hall = halls.find((h) => h.id === hallId);

  if (!hall) {
    return <p>Hall not found!</p>;
  }

  return (
    <div className="p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-4">{hall.name}</h1>
      <p className="mb-2 text-gray-700">{hall.description}</p>
      <p className="mb-2 text-gray-500">Location: {hall.location}</p>
      <p className="mb-2 text-gray-500">Price: {hall.price}</p>
    </div>
  );
};

export default HallDetails;

