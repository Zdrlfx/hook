import React from 'react';
import { Link } from 'react-router-dom';

const StatusDiv = () => {
  return (
   
      <>
        <p className="text-xl font-bold mt-5">No Bookings Made.</p>
        <img
          src="/wave.svg"
          alt="waiting"
          className="absolute w-full h-auto bottom-0 left-0"
        />
        <img
          src="/waiting.svg"
          alt="waiting"
          className="w-1/2 h-auto absolute bottom-0 right-1"
        />
     </>
  
  );
};

export default StatusDiv;
