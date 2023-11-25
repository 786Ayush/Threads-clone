import React from "react";
import Navbar from "./components/Navbar";
import Feeds from "./components/Feeds";
import Search from "./components/Search";
import Create from "./components/Create";
import { Provider } from "react-redux";
import { store } from '../redux/store';
import { useSelector } from "react-redux";
import Profile from "./Profile";
import Notification from "./components/Notification";
import Navbarmobile from "./components/Navbarmobile";
import ProfilePage from "./components/ProfilePage";

const Home = () => {
  const nav = useSelector((state) => state.menu);

  const navbarHeight = 60; // Adjust this value based on your actual navbar height

  return (
    <div>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }} className="bg-black">
        <Navbar />
      </div>
      <div style={{ paddingTop: navbarHeight, paddingBottom: navbarHeight }}>
        {/* Add padding top and bottom equal to the height of the navbar */}
        <div className="md:grid md:grid-cols-3">
          <div></div>
          {nav === 'home' ? (
            <Feeds />
          ) : nav === 'profile' ? (
            <ProfilePage />
          ) : nav === 'search' ? (
            <Search />
          ) : nav === 'notification' ? (
            <Notification />
          ) : (
            <Create />
          )}
          <div></div>
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }}>
        <div className="md:hidden flex justify-center bg-black"><Navbarmobile /></div>
      </div>
    </div>
  );
};

export default Home;
