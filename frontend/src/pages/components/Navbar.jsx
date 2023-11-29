// Navbar.js

import React, { useState } from "react";
import icon from "../../assests/icon.svg";
// import { home, notification, profile, search, create } from "../../redux/slice";
import Navbarmobile from "./Navbarmobile";
// import { GoHome } from "react-icons/go";
import { IoLogOut } from "react-icons/io5";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [lout, slout] = useState(true);
  const history = useNavigate();

  const logout = async () => {
    slout(!lout);
    await localStorage.removeItem("authToken");
    
    // Navigate to /login
    if(!lout)
    {
      console.log("clicked");
      return 
    }
  };


  return (<>
    {!lout&&<Navigate to="/login"/>}
    <nav className=" ">
      <div className="container mx-auto flex justify-center sm:justify-around items-center">
        <div className="text-white font-bold text-lg ">
          <img src={icon} alt="icon" width="50" height="45" />
        </div>
        <div className="md:block hidden">
          <Navbarmobile />
        </div>
        <div className="text-white" onClick={logout}>
          <IoLogOut />
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
