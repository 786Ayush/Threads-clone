// Navbar.js

import React, { useState } from "react";
import icon from "../../assests/icon.svg";
// import { home, notification, profile, search, create } from "../../redux/slice";
import Navbarmobile from "./Navbarmobile";
// import { GoHome } from "react-icons/go";
import { IoLogOut } from "react-icons/io5";
import { Navigate } from "react-router-dom";

const Navbar = () => {
  const [lout, slout] = useState(true);

  const logout = async () => {
    console.log("Logging out...");
    slout(false);

    try {
      await localStorage.removeItem("authToken");
      console.log("authToken removed successfully");
    } catch (error) {
      console.error("Error removing authToken:", error);
    }

    // Navigate to /login
    console.log("Redirecting to /login");
    // history("/login");
  };

  return (
    <>
      {!lout ? <Navigate to="/login" /> : null}
      <nav className=" ">
        <div className="container mx-auto flex justify-around sm:justify-around items-center">
          <div className="text-white font-bold text-lg ">
            <img
              src={icon}
              alt="icon"
              width="50"
              height="45"
              className="cursor-pointer"
            />
          </div>
          <div className="md:block hidden">
            <Navbarmobile />
          </div>
          <div className="text-white text-3xl" onClick={logout}>
            <IoLogOut />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
