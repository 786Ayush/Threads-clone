import React from "react";
import Navbar from "./components/Navbar";
import Feeds from "../features/feeds/Feeds";
import Search from "./components/Search";
import Create from "./components/Create";
import { Provider } from "react-redux";

import { useSelector } from "react-redux";
import Profile from "./Profile";
import Notification from "./components/Notification";
import Navbarmobile from "./components/Navbarmobile";
import ProfilePage from "./components/ProfilePage";
import { Navigate } from "react-router-dom";
import { selectUserData, token } from "../features/user/userSlice";


const Home = () => {
  const userData= useSelector(selectUserData);
  const token= useSelector(token)
  const nav = useSelector((state) => state.menu.menu);
  localStorage.setItem('authToken', token);

  
  const storedToken = localStorage.getItem('authToken');
  
  if (storedToken) {
      // Token exists in localStorage, you can use it for authentication or other purposes
      
      dispatch(checkUserAsync(storedToken));
  } else {
      // Token doesn't exist in localStorage
      console.log('No token found');
  }


  const navbarHeight = 60; // Adjust this value based on your actual navbar height

  return (
    <>
      {!userData && <Navigate to="/login" replace={true}></Navigate>}
      <div>
        <div
          style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
          className="bg-black"
        >
          <Navbar />
        </div>
        <div style={{ paddingTop: navbarHeight, paddingBottom: navbarHeight }}>
          {/* Add padding top and bottom equal to the height of the navbar */}
          <div className="md:grid md:grid-cols-3">
            <div></div>
            {nav === "home" ? (
              <Feeds />
            ) : nav === "profile" ? (
              <ProfilePage />
            ) : nav === "search" ? (
              <Search />
            ) : nav === "notification" ? (
              <Notification />
            ) : (
              <Create />
            )}
            <div></div>
          </div>
        </div>
        <div
          style={{ position: "fixed", bottom: 0, width: "100%", zIndex: 1000 }}
        >
          <div className="md:hidden flex justify-center bg-black">
            <Navbarmobile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
