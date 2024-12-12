import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CollegeMap = () => {
  const navigate = useNavigate();
  // Example data for block-specific halls
  const blockHalls = {
    A: ["hall1", "hall2"],
    C: ["Computer lab"],
    E: ["Admin Office"],
    FG: ["hall3", "hall4"],
  };

  // State for tracking which block is hovered or clicked
  const [hoveredBlock, setHoveredBlock] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null);

  const handleBlockClick = (block) => {
    setSelectedBlock(block === selectedBlock ? null : block); // Toggle block selection
  };

  const handleHallClick = (hall) => {
    // Redirect to a specific link
    navigate(`/dashboard/halls/${hall}`);
  };

  return (
    <div className="relative">
      {/* College Map */}
      <img src="/college map.png" alt="College Map" className="w-full h-auto" />

      {/* Block A */}
      <div
        className="absolute bottom-[45%] right-[15%] w-1/4 h-auto"
        onMouseEnter={() => setHoveredBlock("A")}
        onMouseLeave={() => setHoveredBlock(null)}
        onClick={() => handleBlockClick("A")}
      >
        <img
          src="/blockA.svg"
          alt="Block A"
          className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
        />
        {(hoveredBlock === "A" || selectedBlock === "A") && (
          <div className="absolute top-[-50px] left-[50%] transform -translate-x-1/2 flex space-x-4">
            {blockHalls.A.map((hall, index) => (
              <div
                key={index}
                className="bg-indigo-500 text-white rounded-3xl px-4 py-2 shadow hover:scale-105 transition-transform whitespace-nowrap cursor-pointer"
                onClick={() => handleHallClick(hall)}
              >
                {hall}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Block C */}
      <div
        className="absolute top-[10%] right-[41%] w-1/5 h-auto"
        onMouseEnter={() => setHoveredBlock("C")}
        onMouseLeave={() => setHoveredBlock(null)}
        onClick={() => handleBlockClick("C")}
      >
        <img
          src="/blockC.svg"
          alt="Block C"
          className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
        />
        {(hoveredBlock === "C" || selectedBlock === "C") && (
          <div className="absolute top-[-50px] left-[50%] transform -translate-x-1/2 flex space-x-4">
            {blockHalls.C.map((hall, index) => (
              <div
                key={index}
                className="bg-indigo-500 text-white rounded-3xl px-4 py-2 shadow hover:scale-105 transition-transform whitespace-nowrap cursor-pointer"
                onClick={() => handleHallClick(hall)}
              >
                {hall}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Block E */}
      <div
        className="absolute bottom-[45%] left-[17%] w-[23%] h-auto"
        onMouseEnter={() => setHoveredBlock("E")}
        onMouseLeave={() => setHoveredBlock(null)}
        onClick={() => handleBlockClick("E")}
      >
        <img
          src="/blockE.svg"
          alt="Block E"
          className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
        />
        {(hoveredBlock === "E" || selectedBlock === "E") && (
          <div className="absolute top-[-50px] left-[50%] transform -translate-x-1/2 flex space-x-4">
            {blockHalls.E.map((hall, index) => (
              <div
                key={index}
                className="bg-indigo-500 text-white rounded-3xl px-4 py-2 shadow hover:scale-105 transition-transform whitespace-nowrap cursor-pointer"
                onClick={() => handleHallClick(hall)}
              >
                {hall}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Block F&G */}
      <div
        className="absolute bottom-[10%] left-[14%] w-1/5 h-auto"
        onMouseEnter={() => setHoveredBlock("FG")}
        onMouseLeave={() => setHoveredBlock(null)}
        onClick={() => handleBlockClick("FG")}
      >
        <img
          src="/blockF&G.svg"
          alt="Block F&G"
          className="w-full h-auto hover:scale-105 transition-transform cursor-pointer"
        />
        {(hoveredBlock === "FG" || selectedBlock === "FG") && (
          <div className="absolute top-[-50px] left-[50%] transform -translate-x-1/2 flex space-x-4">
            {blockHalls.FG.map((hall, index) => (
              <div
                key={index}
                className="bg-indigo-500 text-white rounded-3xl px-4 py-2 shadow hover:scale-105 transition-transform whitespace-nowrap cursor-pointer"
                onClick={() => handleHallClick(hall)}
              >
                {hall}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegeMap;
