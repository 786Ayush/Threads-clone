import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Feeds from "../features/feeds/Feeds";
import Search from "./components/Search";
import Create from "./components/Create";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import Notification from "./components/Notification";
import Navbarmobile from "./components/Navbarmobile";
import ProfilePage from "./components/ProfilePage";
import { Navigate } from "react-router-dom";
import {
  checkUserAsync,
  selectUserData,
  token,
} from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const usertoken = useSelector(token);
  // const [userData, setuserData] = useState(null);
  const nav = useSelector((state) => state.menu.menu);
  const userData = useSelector(selectUserData);

  const storedToken = localStorage.getItem("authToken");
  
  console.log(storedToken);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (storedToken !== null) {
        await dispatch(checkUserAsync(storedToken));
      } else {
        localStorage.setItem("authToken", usertoken);
        console.log("No token found");
      }
    };

    fetchData().then(() => {
      if (!userData) {
        navigate("/login", { replace: true });
      }
    });
  }, [dispatch, storedToken, usertoken, navigate]);
  console.log(userData);

  const navbarHeight = 60; // Adjust this value based on your actual navbar height

  return (
    <>
      {/* {!userData && <Navigate to="/login" replace={true}></Navigate>} */}
      {console.log({ userData })}
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
