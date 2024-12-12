import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Fab from "@mui/material/Fab";
import EventIcon from "@mui/icons-material/Event";
import StatusDiv from "./status";
import { Link } from "react-router-dom";


const halls = [
  {
    id:"hall1",
    name: "Hall 1",
    capacity: "120 People",
    location: "Block A",
    availability: "Available 7 days a week",
    price: "$200/hr",
    description:
      "Our flagship venue perfect for conferences, performances, and large ceremonies.",
    image: "/Hall 1.png", // Replace with your hall images
  },
  {
    id:"hall2",
    name: "Hall 2",
    capacity: "80 People",
    location: "Block A",
    availability: "Available weekdays",
    price: "$150/hr",
    description: "Ideal for meetings that require asthetic feel.",
    image: "/Hall 2.jpg", // Replace with your hall images
  },
  {
    id:"hall3",
    name: "Hall 3",
    capacity: "60 People",
    location: "Block F & G",
    availability: "Available on-demand",
    price: "$100/hr",
    description: "Perfect for corporate meetings and small workshops.",
    image: "/Hall 3.png", // Replace with your hall images
  },
  
];


const Home = () => {
  return (
    <>
      <div className=" relative flex flex-col h-full w-full">
        <div className="flex w-full h-[calc(35%)] justify-between">
          <div className="relative text-gray-600 rounded-3xl p-6 bg-white shadow-lg flex flex-col items-center md:items-start w-1/4 h-full hover:scale-105 transition-transform">
          <Link to="/dashboard/booking">
            <StatusDiv />
          </Link>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-3xl p-9 shadow-lg flex flex-col items-center md:items-start w-[calc(72%)] h-full  ">
            <h2 className="text-sm  mb-4 text-center md:text-left">
              Hi Sweta, Welcome back!
            </h2>
            <p className="text-2xl font-bold mb-4 text-center md:text-left">
              Browse through the available halls for your events and secure your
              booking in just a few clicks!
            </p>
            <div className="flex items-center justify-center">
              <Link to="/dashboard/form">
                <button className="flex items-center bg-black text-white font-medium px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition duration-300 text-xs mt-3">
                  Book Now
                  <span className="ml-2 flex items-center justify-center w-5 h-5 bg-white text-black rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="size-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-full h-[calc(65%)] justify-between items-center">
          
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {halls.map((hall, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform h-[calc(100%)] "
          >
            {/* Hall Image */}
            <div className="relative h-40">
              <img
                src={hall.image}
                alt={hall.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Hall Details */}
            <div className="p-4 h-24 flex flex-col justify-between">
              <h2 className="text-sm font-bold">{hall.name}</h2>
              <p className="text-xs text-gray-600">{hall.description}</p>

              <div className="text-xs text-gray-500 flex items-center mt-2">
                <span className="mr-2">👤</span> Capacity: {hall.capacity}
              </div>
              <div className="text-xs text-gray-500 flex items-center mt-1">
                <span className="mr-2">📍</span> {hall.location}
              </div>
            </div>

            {/* Call to Action */}
            <div className="p-4 mt-2">
              <button className="w-full inline-block px-4 py-2 bg-indigo-500 text-white text-center rounded-lg hover:bg-indigo-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
          
          </div>
        <Link to="/dashboard/form">
        <div className="absolute bottom-8 right-0">
          <Fab
            sx={{
              backgroundColor: "#ff6584", // Tailwind indigo-500 hex code
              "&:hover": {
                backgroundColor: "#fa4b6e", // Darker shade of indigo for hover effect (indigo-600)
              },
            }}
            aria-label="add"
          >
            <EventIcon sx={{ color: "#FFFFFF" }} />
          </Fab>
        </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
