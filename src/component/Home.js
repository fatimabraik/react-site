import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from "./images/dentiste.jpg";
import '../css/demo.css'

const Home = () => {
  return (
    <>
      <div className="mainSection">
        <div className="contentBox">
          <h1 className='contentBox'>with us you will 
          have a magical smile</h1>
          <div className="btnBox">
            <div className="btn">
              <NavLink
                to="/contact"
                className="onlinAppoitement"
              >
                ONLINE APPOINTEMENT
              </NavLink>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src={homeimg} alt=""></img>
        </div>
      </div>
    </>
  );
};
export default Home;
