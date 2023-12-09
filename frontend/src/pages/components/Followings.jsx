import React from "react";
import { selectFollowings } from "../../features/user/userSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SearchId from "./SearchId";

const Followings = () => {
  const followings = useSelector(selectFollowings);
  return (
    <div>
      <Navbar />
      <div className="mx-auto">
        <div className="grid grid-cols-3 mx-auto text-white">
          <div></div>
          <div className=" mx-auto justify-center w-full lg:w-4/5">
            {followings.map((user, index) => (
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

export default Followings;
