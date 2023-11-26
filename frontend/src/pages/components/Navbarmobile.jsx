import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { home, notification, profile, search, create } from "../../redux/slice";

const Navbarmobile = () => {
  const dispatch = useDispatch();
  const nav = useSelector((state) => state.menu.menu);
  // Function to toggle the visibility of the dropdown
  
  return (
    <div className="flex space-x-4  ">
      <Link
        to="/"
        className="text-white hover:bg-zinc-800 p-2 sm:p-6 hover:rounded "
        onClick={() => {
          dispatch(home());
        }}
      >
        {console.log(nav)}
        {nav === "home" ? (
          <GoHome className=" w-7 h-7 " />
        ) : (
          <GoHome className="w-7 h-7 text-gray-700" />
        )}
      </Link>
      <Link
        to="/search"
        className="text-white hover:bg-zinc-800 p-2 sm:p-6 sm:p-0 hover:rounded "
        onClick={() => dispatch(search())}
      >
        {nav === "search" ? (
          <IoSearch className="w-7 h-7 " />
        ) : (
          <IoSearch className="w-7 h-7 text-gray-700" />
        )}
      </Link>
      <Link
        to="/create"
        className="text-white hover:bg-zinc-800 p-2 sm:p-6 hover:rounded "
        onClick={() => dispatch(create())}
      >
        {nav === "create" ? (
          <IoMdAdd className="w-7 h-7 " />
        ) : (
          <IoMdAdd className="w-7 h-7 text-gray-700" />
        )}
      </Link>
      <Link
        to="/notification"
        className="text-white hover:bg-zinc-800 p-2 sm:p-6 hover:rounded "
        onClick={() => dispatch(notification())}
      >
        {nav === "notification" ? (
          <FaHeart className="w-7 h-7 " />
        ) : (
          <FaRegHeart className="w-7 h-7 text-gray-700" />
        )}
      </Link>
      <Link
        to="/profile"
        className="text-white hover:bg-zinc-800 p-2 sm:p-6 hover:rounded "
        onClick={() => dispatch(profile())}
      >
        {nav === "profile" ? (
          <FaRegUser className="w-7 h-7 " />
        ) : (
          <FaUser className="w-7 h-7 text-gray-700" />
        )}
      </Link>
    </div>
  );
};

export default Navbarmobile;
