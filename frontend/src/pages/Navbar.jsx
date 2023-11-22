// Navbar.js

import React from "react";
import icon from "../assests/icon.svg";
import home from "../assests/home.svg";
import heart from "../assests/heartb.svg";
import search from "../assests/searchb.svg"
import user from "../assests/user.svg";
import barb from "../assests/barsb.svg";
import bar from "../assests/bar.svg"
import create from "../assests/createb.svg";
import { useState } from "react";


const Navbar = () => {

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    // Function to toggle the visibility of the dropdown
    const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);
    };
  

    return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-white font-bold text-lg">
          <img src={icon} alt="icon" width="50" height="50" />
        </div>
        <div className="flex space-x-2">
          <a
            href="#"
            className="text-white hover:bg-gray-800 p-4 hover:rounded "
          >
            <img src={home} alt="home" width="30" height="30" />{" "}
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-800 p-4 hover:rounded "
          >
            <img src={search} alt="home" width="30" height="30" />{" "}
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-800 p-4 hover:rounded "
          >
            <img src={create} alt="home" width="30" height="30" />{" "}
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-800 p-4 hover:rounded "
          >
            <img src={heart} alt="home" width="30" height="30" />{" "}
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-800 p-4 hover:rounded "
          >
            <img src={user} alt="home" width="30" height="30" />{" "}
          </a>
        </div>
        <div className="text-white relative">
            <button  onClick={toggleDropdown}>
            {isDropdownVisible ?<img src={bar} alt="home" width="30" height="30" />:<img src={barb} alt="home" width="30" height="30" />}
        
            </button>
            
        </div>
        </div>
        {isDropdownVisible && (
            <div className="dropdown-content flex flex-col alsolute">
              <a href="#" className="text-white hover:bg-gray-800 p-2 hover:rounded ">
                Item 1
              </a>
              <a href="#" className="text-white hover:bg-gray-800 p-2 hover:rounded">
                Item 2
              </a>
              <a href="#" className="text-white hover:bg-gray-800 p-2 hover:rounded">
                Item 3
              </a>
            </div>
          )}
      
    </nav>
  );
};

export default Navbar;
