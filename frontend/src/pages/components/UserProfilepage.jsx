import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  addFollowerAsync,
  addFollowingAsync,
  getUserbyIdAsync,
  selectUserData,
  selectgetUserbyid,
} from "../../features/user/userSlice";
import FeedsbyUserid from "../../features/feeds/FeedsbyUserid";

const UserProfilepage = (props) => {
  const storedToken = localStorage.getItem("authToken");
  const pathArray = window.location.pathname.split("/");
  const userId = pathArray[pathArray.length - 1];
  const { id } = useParams();
  const dispatch = useDispatch();
  const userData = useSelector(selectgetUserbyid);
  const currUser = useSelector(selectUserData);
  const [follow, setFollow] = useState("Follow");
  const [showBtn, setShowBtn] = useState(true);
  useEffect(() => {
    dispatch(getUserbyIdAsync({ token: storedToken, id: id }));
  }, [dispatch]);
  useEffect(() => {
    for (let i = 0; i < currUser?.following.length; i++) {
      if (currUser?.following[i] === userData) {
        setFollow("Following");
      }
    }
    if (currUser?._id === userData?._id) {
      setShowBtn(false);
    }
  }, [currUser]);
  // console.log(userData);
  const profilePicture = userData
    ? "http://localhost:8080/" + userData.imageURL
    : null;
  const name = userData ? userData.name : "name";
  const userName = userData ? "@" + userData.username : "username";
  const bio = userData ? userData.bio : "bio";
  const handleFollow = () => {
    dispatch(
      addFollowingAsync({
        id: currUser._id,
        token: currUser.token,
        username: currUser.username,
      })
    );
    dispatch(
      addFollowerAsync({
        id: userData._id,
        token: currUser.token,
        username: currUser.username,
      })
    );
    setFollow("Following");
  };
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
            {showBtn && (
              <div className="flex ">
                <button
                  className="mx-auto justify-center flex rounded  bg-black border border-gray-800   hover:bg-white hover:text-black text-white px-10 py-2"
                  to="/editprofile"
                  onClick={handleFollow}
                >
                  {follow}
                </button>
                <button
                  className="mx-auto justify-center flex rounded  bg-black border border-gray-800   hover:bg-white hover:text-black text-white px-10 py-2"
                  to="/editprofile"
                >
                  Mention
                </button>
              </div>
            )}
          </header>
          <h1 className="text-white flex w-full justify-center">Threads</h1>
          <hr />
          <FeedsbyUserid userid={id} />
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default UserProfilepage;
