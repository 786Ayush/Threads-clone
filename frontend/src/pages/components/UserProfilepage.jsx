import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserbyIdAsync,
  selectgetUserbyid,
} from "../../features/user/userSlice";

const UserProfilepage = (props) => {
  const storedToken = localStorage.getItem("authToken");
  const pathArray = window.location.pathname.split("/");
  const userId = pathArray[pathArray.length - 1];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserbyIdAsync({ token: storedToken, id: userId }));
  }, []);
  const userData = useSelector(selectgetUserbyid);
  // console.log(userData);
  const profilePicture = userData
    ? "http://localhost:8080/" + userData.imageURL
    : null;
  const name = userData ? userData.name : "name";
  const userName = userData ? "@" + userData.username : "username";
  const bio = userData ? userData.bio : "bio";

  return (
    <>
      <Navbar />
      <div className="md:grid md:grid-cols-3">
        <div></div>
        <div>
          {/* Show images only for lower screen sizes */}
          <header className=" text-white py-8">
            <div className="text-white p-2 mb-3">
              <Link to="/">
                <button>
                  <IoMdArrowRoundBack className="text-xl " />
                </button>
              </Link>
            </div>
            <div className="container mx-auto px-4 mb-3 flex items-center justify-between">
              {/* Left side: Name, username */}
              <div>
                <h1 className="text-2xl font-bold">{name}</h1>
                <p className="text-md font-bold">{userName}</p>
                <div className="my-5">
                  <p className="text-md">{bio}</p>
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

          <hr />
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default UserProfilepage;
