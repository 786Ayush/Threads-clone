import React from "react";
import Navbar from "./components/Navbar";
import Feeds from "./components/Feeds";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="md:grid md:grid-cols-3">
        <div></div>
        <Feeds />
        <div></div>
      </div>
    </div>
  );
};

export default Home;
