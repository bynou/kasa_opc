import React from "react";
import Navbar from "./Navbar";
import Format from "../components/Format";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Format>
        <Navbar />
      </Format>
      <Outlet />
    </>
  );
};

export default Layout;
