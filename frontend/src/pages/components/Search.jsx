import React from "react";
import SearchId from "./SearchId";
import SearchBar from "../../features/user/components/SearchBar";
import { useSelector } from "react-redux";
import { selectSearchData } from "../../features/user/userSlice";
import { Link } from "react-router-dom";

const Search = () => {
  const userData = useSelector(selectSearchData);

  return (
    <div className="mt-5">
      <div className="flex flex-col">
        <SearchBar />
        <div className="flex flex-col">
          {userData.map((user, index) => (
            <Link to={`/userprofile/${userData._id}`}>
            <SearchId key={index} user={user} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
