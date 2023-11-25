// Navbar.js

import React from "react";
import icon from "../../assests/icon.svg";
import { home,notification,profile,search,create } from '../../redux/slice';
import Navbarmobile from './Navbarmobile';
import { GoHome } from "react-icons/go";

const Navbar = () => {
  
  
  
   return (
    <nav className=" ">
      <div className="container mx-auto flex justify-center sm:justify-around items-center">
        <div className="text-white font-bold text-lg ">
          <img src={icon} alt="icon" width="50" height="45" />
        </div>
        <div className="md:block hidden">
        <Navbarmobile />
        </div>
        <div className=""></div>
      </div>
    </nav>
  );
};

export default Navbar;
