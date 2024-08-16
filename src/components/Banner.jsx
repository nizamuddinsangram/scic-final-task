import React from "react";
import image from "../assets/banner image.jpg";
const Banner = () => {
  return (
    <section className="bg-gray-100 py-12 mb-6">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 w-full p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Service
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            We offer top-notch services to help you achieve your goals. Our team
            is dedicated to providing the best experience possible. Join us and
            be part of something great.
          </p>
          <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
            Get Started
          </button>
        </div>
        <div className="lg:w-1/2 w-full p-6">
          <img
            src={image}
            alt="Banner Image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
