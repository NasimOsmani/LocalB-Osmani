import React from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Root;
