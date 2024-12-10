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
        <p className="text-base font-medium flex  items-center">Sweta Suwal</p>
      </div>
    </div>
  );
};

export default Navbar;
