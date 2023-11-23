// Navbar.js
import { Link } from 'react-router-dom';
import React from "react";
import icon from "../../assests/icon.svg";
import { useState } from "react";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { home,notification,profile,search,create } from '../../redux/slice';


const Navbar = () => {
  
  const dispatch = useDispatch();
  const nav = useSelector((state) => state.menu);
  // Function to toggle the visibility of the dropdown
  const Home=(e)=>{
    e.preventDefault()
    dispatch(home())
  }
  
   return (
    <nav className=" p-4 ">
      <div className="container mx-auto flex justify-center sm:justify-around items-center">
        <div className="text-white font-bold text-lg ">
          <img src={icon} alt="icon" width="50" height="50" />
        </div>
        <div className="flex space-x-4  ">
          <Link
            to="/"
            className="text-white hover:bg-gray-800 p-4 hover:rounded md:block hidden" 
            onClick={()=>{dispatch(home())}}
          >
            {console.log(nav)}
            {nav==="home"?<GoHome className='w-10 h-10 '/>:<GoHome className='w-10 h-10 text-gray-700'/>}
            
          </Link>
          <Link
            to="/search"
            className="text-white hover:bg-gray-800 p-4 hover:rounded md:block hidden"
            onClick={()=>dispatch(search())}
          >
            {nav==="search"?<IoSearch className='w-10 h-10 '/>:<IoSearch className='w-10 h-10 text-gray-700'/>}
          </Link>
          <Link
            to="/create"
            className="text-white hover:bg-gray-800 p-4 hover:rounded md:block hidden"
            onClick={()=>dispatch(create())}
          >
            {nav==="create"?<IoMdAdd className='w-10 h-10 '/>:<IoMdAdd className='w-10 h-10 text-gray-700'/>}
          </Link>
          <Link
            to="/notification"
            className="text-white hover:bg-gray-800 p-4 hover:rounded md:block hidden"
            onClick={()=>dispatch(notification())}
          >
            {nav==="notification"?<FaHeart className='w-10 h-10 '/>:<FaRegHeart className='w-10 h-10 text-gray-700'/>}
          </Link>
          <Link
            to="/profile"
            className="text-white hover:bg-gray-800 p-4 hover:rounded md:block hidden"
            onClick={()=>dispatch(profile())}
          >
            {nav==="profile"?<FaRegUser className='w-10 h-10 '/>:<FaUser className='w-10 h-10 text-gray-700'/>}
          </Link>
        </div>
        <div className=""></div>
      </div>
    </nav>
  );
};

export default Navbar;
