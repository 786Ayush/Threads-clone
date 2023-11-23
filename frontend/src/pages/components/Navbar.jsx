// Navbar.js

import React from "react";
import icon from "../../assests/icon.svg";
import home from "../../assests/home.svg";
import heart from "../../assests/heartb.svg";
import search from "../../assests/searchb.svg";
import user from "../../assests/user.svg";
import barb from "../../assests/barsb.svg";
import bar from "../../assests/bar.svg";
import create from "../../assests/createb.svg";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle the visibility of the dropdown
  // const toggleDropdown = () => {
  //   setDropdownVisible(!isDropdownVisible);
  // };
  return (
    <nav className=" p-4 md:block hidden">
      <div className="container mx-auto grid grid-cols-3 justify-around items-center">
        <div className="text-white font-bold text-lg">
          <img src={icon} alt="icon" width="50" height="50" />
        </div>
        <div className="flex space-x-14">
          <a
            href="#"
            className="text-white hover:bg-gray-800 p-4 hover:rounded "
          >
            <img src={home} alt="home" className="w-[50px] md:w-[30px]" />{" "}
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-800 p-4 hover:rounded "
          >
            <img src={search} alt="home" className="w-[50px] md:w-[30px]" />{" "}
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-800 p-4 hover:rounded "
          >
            <img src={create} alt="home" className="w-[50px] md:w-[30px]" />{" "}
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-800 p-4 hover:rounded "
          >
            <img src={heart} alt="home" className="w-[50px] md:w-[30px]" />{" "}
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-800 p-4 hover:rounded "
          >
            <img src={user} alt="home" className="w-[50px] md:w-[30px]" />{" "}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
