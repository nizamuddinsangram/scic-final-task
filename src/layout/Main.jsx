import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Main = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogOut = async () => {
    await logOut();
  };
  return (
    <div>
      <div className="flex justify-between bg-red-300 px-4">
        <p>navbar</p>
        <button
          onClick={handleLogOut}
          className="px-2 bg-blue-400 rounded-lg text-white py-2"
        >
          Logout
        </button>
      </div>
      <Outlet />
      <p>footer</p>
    </div>
  );
};

export default Main;
