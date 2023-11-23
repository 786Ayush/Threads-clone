import React from "react";
import Navbar from "./components/Navbar";
import ProfilePage from "./components/ProfilePage";
const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="md:grid md:grid-cols-3">
        <div></div>
        <ProfilePage />
        <div></div>
      </div>
    </div>
  );
};

export default Profile;
