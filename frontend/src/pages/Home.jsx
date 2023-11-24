import React from "react";
import Navbar from "./components/Navbar";
import Feeds from "./components/Feeds";
import Search from "./components/Search";
import Create from "./components/Create";
import { Provider } from "react-redux";
import {store} from '../redux/store'
import { useSelector } from "react-redux";
import Profile from "./Profile";
import Notification from "./components/Notification";

const Home = () => {
  const nav=useSelector((state)=>state.menu);

  


  return (
    
    <div>
      <Navbar />
      <div className="md:grid md:grid-cols-3">
        <div></div>{
          nav==='home'?
          <Feeds />:
          nav==='profile'?
          <Profile/>:
          nav==='search'?
          <Search/>:
          nav==='notification'?
          <Notification/>
:
          <Create/>
        }
        <div></div>
      </div>
    </div>
    
  );
};

export default Home;
