import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Introduction from "../components/Introduction";

const Home = () => {
  return (
    <>
      <Navbar />
      <Introduction />
      <Outlet />
    </>
  );
};

export default Home;
