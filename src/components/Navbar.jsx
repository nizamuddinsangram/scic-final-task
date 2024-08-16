import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import profilePic from "../assets/boy.jpg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="navbar bg-gray-50 shadow-lg mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-50 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-purple-700 text-white"
                    : "hover:bg-gray-200 active:bg-gray-300"
                }
              >
                HOME
              </NavLink>
            </li>
            {user ? (
              <li>
                <button
                  onClick={handleLogOut}
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-gray-200 active:bg-gray-300"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-purple-700 text-white"
                      : "hover:bg-gray-200 active:bg-gray-300"
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "bg-purple-700 text-white"
                    : "hover:bg-gray-200 active:bg-gray-300"
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          to="/"
          className="btn btn-ghost text-xl font-bold text-purple-700 italic"
        >
          AwesomeSite
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-purple-700 text-white"
                  : "hover:bg-gray-200 active:bg-gray-300"
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "bg-purple-700 text-white"
                  : "hover:bg-gray-200 active:bg-gray-300"
              }
            >
              Register
            </NavLink>
          </li>
          {user ? (
            <li>
              <button
                onClick={handleLogOut}
                className="block w-full text-left px-4 py-2 rounded-md hover:bg-gray-200 active:bg-gray-300"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "bg-purple-700 text-white"
                    : "hover:bg-gray-200 active:bg-gray-300"
                }
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={profilePic} alt="Profile" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
