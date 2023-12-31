import React from "react";
import SearchId from "./SearchId";
import SearchBar from "../../features/user/components/SearchBar";
import { useSelector } from "react-redux";
import { selectSearchData } from "../../features/user/userSlice";
import { Link } from "react-router-dom";

const Search = () => {
  const userData = useSelector(selectSearchData);
  // console.log(userData);
  return (
    <div className="mt-5">
      <div className="flex flex-col">
        <SearchBar />
        <div className="flex flex-col">
          { !userData.message&&userData.map((user, index) => (
            <Link key={index} to={`/userprofile/${user._id}`}>
              <SearchId key={index} user={user} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
