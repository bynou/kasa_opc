import React from "react";
import Navbar from "./Navbar";
import Format from "../components/Format";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Format>
        <Navbar />
        <Outlet />
      </Format>
      <Footer />
    </>
  );
};

export default Layout;
