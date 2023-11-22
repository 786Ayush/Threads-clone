import React, { useState } from "react";
import icon from "../assests/icon.svg";
import menu from "../assests/menu.svg";
import { Link } from "react-router-dom";

const ProfilePage = () => {

  const userName = "John Doe";
  const userHandle = "@johndoe";
  const bio = "hello my name is John";
  const profilePicture =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d364921d-105f-4998-a93f-b7aeb2ca8e68/df88ssd-1bdcaeb2-0202-4f7c-9b07-0cdebb64cc90.jpg/v1/fill/w_894,h_894,q_70,strp/zoro_icon_by_lucaesposito06_df88ssd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzMiIsInBhdGgiOiJcL2ZcL2QzNjQ5MjFkLTEwNWYtNDk5OC1hOTNmLWI3YWViMmNhOGU2OFwvZGY4OHNzZC0xYmRjYWViMi0wMjAyLTRmN2MtOWIwNy0wY2RlYmI2NGNjOTAuanBnIiwid2lkdGgiOiI8PTE2MzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WFpjXupIOFWcCHxMEDSD8UHFMrmZJcP2MS5x6IbKxAM";

  return (
    <div>
      {/* Show images only for lower screen sizes */}
      <div className="flex justify-between items-center md:hidden px-4 py-2">
        <img src={icon} alt="" className="mx-auto w-16 h-14" />
        <img
          src={menu}
          alt=""
          className="w-10 cursor-pointer h-10 filter invert absolute top-0 right-0 mr-4 mt-4"
        />
      </div>

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
            className="mx-auto justify-center flex rounded-[10px] md:mt-28 mt-10 bg-black border w-[95%]  hover:bg-white hover:text-black text-white px-4 py-2"
            to="/editprofile"
          >
            Edit Profile
          </Link>
        </div>
      </header>
    </div>
  );
};

export default ProfilePage;
