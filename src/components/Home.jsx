import React from "react";

const Home = () => {
  return (
    <div className="flex w-full h-[calc(35%)] justify-between">
      <div className=" relative text-gray-600 rounded-3xl p-6 bg-white shadow-lg flex flex-col items-center md:items-start w-1/4 h-full ">
        <p className="text-xl font-bold mt-5">No Bookings Made.</p>
        <img
          src="/wave.svg"
          alt="waiting"
          className=" absolute w-full h-auto bottom-0 left-0"
        />
        <img
          src="/waiting.svg"
          alt="waiting"
          className="w-1/2 h-auto absolute bottom-0 right-1"
        />
      </div>
      <div className="bg-indigo-500 text-white rounded-3xl p-6 shadow-lg flex flex-col items-center md:items-start w-[calc(72%)] h-full "></div>
    </div>
  );
};

export default Home;
