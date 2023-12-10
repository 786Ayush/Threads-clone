import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

const SearchId = ({user}) => {
  const name=user.name;
  const iconName=user.imageURL;
  const onFollowClick =()=>{};
  const [isFollowing,setIsFollowing]= useState(false);

  return (
    <div className="flex flex-col">
    <div className="bg-black p-4 rounded shadow-md flex items-center justify-between">
      <div className="flex items-center">
        <div className="rounded-full overflow-hidden mr-4">
          {/* Replace this with your logic for displaying the icon */}
          {iconName && (
            <img
              src={iconName}
              alt={name}
              className="w-12 h-12"
            />
          )}
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">{name}</h2>
          
        </div>
      </div>
      <button
        onClick={onFollowClick}
        className={`px-4 py-2 rounded ${
          isFollowing ? " text-gray-800" : " text-white"
        } flex items-center border bg-black`}
      >
        <FaUserPlus className="mr-2" />
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
      <hr className="bg-gray-800 border-none h-[1px]"/>
    </div>
  );
};

export default SearchId;
