import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-between p-8 border border-gray-200">
      <Link to={"/"}>
        <h1>Intro to React</h1>
      </Link>

      <nav className="flex space-x-6">
        <Link to={"/"} className="hover:text-violet-600">
          Home
        </Link>
        <Link to={"/shop"} className="hover:text-violet-600">
          Shop
        </Link>
        <Link to={"/about"} className="hover:text-violet-600">
          About
        </Link>
        <Link to={"/contact"} className="hover:text-violet-600">
          Contact
        </Link>
      </nav>
    </div>
  );
};
