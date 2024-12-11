import React from "react";
import SearchBar from "./SearchBar";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-5">
      <SearchBar />
      <div className="flex space-x-4 w-1/4">
        <IconButton aria-label="notification">
          <NotificationsNoneIcon />
        </IconButton>
        <Avatar alt="monkey" src="/avatar.png" />
        <div className="flex flex-col items-start">
        <p className="text-base font-medium flex  items-center">Sweta Suwal</p>
        <div className="flex flex-start space-x-1 items-baseline">
          <div className="w-2 h-2 bg-[#ff6584] rounded-full"></div>
        <p className="text-xs text-gray-500 font-semibold">
        
          Student</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
