import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Main = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogOut = async () => {
    await logOut();
  };
  return (
    <div>
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
