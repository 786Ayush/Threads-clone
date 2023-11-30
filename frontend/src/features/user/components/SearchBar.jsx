import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUserbyuserNameAsync, selectUserData, token } from "../userSlice";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  // const userData=useSelector(selectUserData)
  const userToken=useSelector(token)

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(getUserbyuserNameAsync({username:searchTerm,token:userToken}));
    console.log("clicked");
  };

  const handleKeyPress = (event) => {
    // Trigger search on Enter key press
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center w-full max-w-screen-xl mx-auto px-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="flex-1 px-4 py-3 border-null rounded-l focus:outline-none bg-bgColor text-white"
      />
    </div>
  );
};

export default SearchBar;
