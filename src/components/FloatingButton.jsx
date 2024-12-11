import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const FloatingActionButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-5 right-5">
      <div
        className={`flex items-center transition-all duration-300 ${
          hovered ? "w-40" : "w-12"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Fab color="primary" aria-label="book" className="z-10">
          <AddIcon />
        </Fab>
        <div
          className={`ml-3 bg-blue-600 text-white text-sm font-medium py-2 px-3 rounded-lg shadow-md transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Book Now
        </div>
      </div>
    </div>
  );
};

export default FloatingActionButton;
