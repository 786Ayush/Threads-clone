import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const UserProfilepage = () => {
  const profilePicture = "https://placekitten.com/40/40";
  const name = "Ayush";
  const userName = "@" + "ayush";

  return (
    <div className="md:grid md:grid-cols-3">
      <div></div>
      <div>
        {/* Show images only for lower screen sizes */}
        <header className="bg-zinc-900 text-white py-8">
          <div className="text-white ">
            <button>
              <IoMdArrowRoundBack />
            </button>
          </div>
          <div className="container mx-auto px-4 flex items-center justify-between">
            {/* Left side: Name, username */}
            <div>
              <h1 className="text-2xl font-bold">hello</h1>
              <p className="text-md font-bold">sdfkjld</p>
              <div className="my-5">
                <p className="text-md">fdkfljalsdj</p>
              </div>
            </div>
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex ">
            <Link
              className="mx-auto justify-center flex rounded  bg-black border border-gray-800   hover:bg-white hover:text-black text-white px-10 py-2"
              to="/editprofile"
            >
              Following
            </Link>
            <Link
              className="mx-auto justify-center flex rounded  bg-black border border-gray-800   hover:bg-white hover:text-black text-white px-10 py-2"
              to="/editprofile"
            >
              Mention
            </Link>
          </div>
        </header>
        <h1 className="text-white flex w-full justify-center">Threads</h1>
        <hr />
      </div>
      <div className=""></div>
    </div>
  );
};

export default UserProfilepage;
