import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <p>navbar</p>
      <Outlet />
      <p>footer</p>
    </div>
  );
};

export default Main;
