import React from "react";
import Feeds from "../../features/feeds/Feeds";
import Navbar from "./Navbar";
import { useState } from "react";
import Createbar from "./Createbar";
const Create = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };


  return (
    <div >
      <div className="container mx-auto mt-8" >

        {/* New Thread Pop-up */}
        <Createbar  />

        {/* Rest of your application content */}
      </div>
    </div>
  );
};

export default Create;
