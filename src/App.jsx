import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/hero";
import Login from "./components/login";
import Layout from "./components/Layout"; // This is your dashboard with nested routes
// import HallDetails from "./components/HallDetails";

const App = () => {
  const [user, setUser] = useState(null); // Store user data globally in App

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/dashboard/*" element={<Layout user={user} />} />
        {/* <Route path="halls/:hallId" element={<HallDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
