import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Contact from "./component/Contact";
import List from "./component/List";
import "./css/ListStyle.css";
import { selectUser } from "./Feature/UserSlice";
import { useSelector } from "react-redux";
import Message from "./component/Message";

const APP = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <List />
      {/* {user ? <Logout/> : <Contact/>}; */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </>
  );
};
export default APP;

