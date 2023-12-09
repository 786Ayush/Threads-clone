import React from "react";
import Navbar from "./Navbar";
import SearchId from "./SearchId";
import { useSelector } from "react-redux";
import { selectFollower } from "../../features/user/userSlice";
import { Link } from "react-router-dom";

const Followers = () => {
  const followers = useSelector(selectFollower);
  return (
    <div>
      <Navbar />
      <div className="mx-auto">
        <div className="grid grid-cols-3 mx-auto text-white">
          <div></div>
          <div className=" mx-auto justify-center w-full lg:w-4/5">
            {followers.map((user, index) => (
              <Link key={index} to={`/userprofile/${user._id}`}>
                <SearchId key={index} user={user} />
              </Link>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Followers;
