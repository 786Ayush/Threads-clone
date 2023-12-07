import React, { useState } from "react";

import { Link, Navigate } from "react-router-dom";
import Feeds from "../../features/feeds/Feeds";
import { useSelector, useDispatch } from "react-redux";
import { selectUserData, token } from "../../features/user/userSlice";
import { useEffect } from "react";
import { checkUserAsync } from "../../features/user/userSlice";
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
  }, []);
  // const userName = userData.name
  // const userHandle = "@" + userData.username;
  // const bio = userData.bio;
  // const profilePicture = "http://localhost:8080/"+userData.imageURL || "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d364921d-105f-4998-a93f-b7aeb2ca8e68/df88ssd-1bdcaeb2-0202-4f7c-9b07-0cdebb64cc90.jpg/v1/fill/w_894,h_894,q_70,strp/zoro_icon_by_lucaesposito06_df88ssd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzMiIsInBhdGgiOiJcL2ZcL2QzNjQ5MjFkLTEwNWYtNDk5OC1hOTNmLWI3YWViMmNhOGU2OFwvZGY4OHNzZC0xYmRjYWViMi0wMjAyLTRmN2MtOWIwNy0wY2RlYmI2NGNjOTAuanBnIiwid2lkdGgiOiI8PTE2MzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WFpjXupIOFWcCHxMEDSD8UHFMrmZJcP2MS5x6IbKxAM";

  // console.log(userData );

  // console.log("http://localhost:8080/"+userData.imageURL)

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
