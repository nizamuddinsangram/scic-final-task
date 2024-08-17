import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../../assets/error10.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <img src={errorImage} alt="Error" className="w-full max-w-md" />
      <div className="text-center mt-8">
        <h2 className="text-4xl font-semibold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded shadow"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
