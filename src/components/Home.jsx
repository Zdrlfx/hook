import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Fab from "@mui/material/Fab";
import EventIcon from "@mui/icons-material/Event";
import StatusDiv from "./status";

const Home = () => {
  return (
    <>
      <div className=" relative flex flex-col h-full w-full">
        <div className="flex w-full h-[calc(35%)] justify-between">
          <StatusDiv />
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-3xl p-6 shadow-lg flex flex-col items-center md:items-start w-[calc(72%)] h-full  ">
            <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
              Hi Sweta, Welcome back!
            </h2>
            <p className="text-sm mb-4 text-center md:text-left">
              Browse through the available halls for your events and secure your
              booking in just a few clicks!
            </p>
            <div className="flex items-center justify-center">
              <button className="flex items-center bg-black text-white font-medium px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition duration-300 text-xs">
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
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-0">
          <Fab
            sx={{
              backgroundColor: "#6366F1", // Tailwind indigo-500 hex code
              "&:hover": {
                backgroundColor: "#4F46E5", // Darker shade of indigo for hover effect (indigo-600)
              },
            }}
            aria-label="add"
          >
            <EventIcon sx={{ color: "#FFFFFF" }} />
          </Fab>
        </div>
      </div>
    </>
  );
};

export default Home;
