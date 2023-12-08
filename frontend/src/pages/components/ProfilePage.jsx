import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserData } from "../../features/user/userSlice";
import { useEffect } from "react";
import FeedsbyUserid from "../../features/feeds/FeedsbyUserid";

const ProfilePage = () => {
  const userData = useSelector(selectUserData);
  // const usertoken= useSelector(token)
  const [userName, setUserName] = useState("");
  const [userHandle, setHandle] = useState("");
  const [bio, setbio] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  useEffect(() => {
    setUserName(userData.name);
    setHandle("@" + userData.username);
    setbio(userData.bio);
    setProfilePicture("http://localhost:8080/" + userData.imageURL);
  }, [userData]);
  return (
    <div>
      {/* Show images only for lower screen sizes */}
      <header className="bg-black text-white py-8">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Left side: Name, username */}
          <div>
            <h1 className="text-2xl font-bold">{userName}</h1>
            <p className="text-md font-bold">{userHandle}</p>
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
            className="mx-auto justify-center flex rounded  bg-black border border-gray-800 w-[95%]  hover:bg-white hover:text-black text-white px-4 py-2"
            to="/editprofile"
          >
            Edit Profile
          </Link>
        </div>
      </header>
      <h1 className="text-white flex w-full justify-center">Threads</h1>
      <hr />
      <FeedsbyUserid userid={userData._id} />
    </div>
  );
};

export default ProfilePage;
