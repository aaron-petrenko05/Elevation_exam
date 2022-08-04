import React from "react";
import {Outlet} from "react-router-dom";
import NavHeader from "../component/navbar";

const Layout = () => {
  return (
    <>
      <NavHeader />
      <Outlet />
    </>
  );
};

export default Layout;