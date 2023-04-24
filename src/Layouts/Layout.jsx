import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Main from "../components/Main";
const Layout = () => {
  return (
    <>
      <Main>
        <Navbar />
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
