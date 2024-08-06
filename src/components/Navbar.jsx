import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav-wrapper pt-4">
      <nav className="flex justify-between items-center md:py-4 px-12 bg-my-gray text-my-white rounded-full ">
        <h1 className="text-3xl font-bold ">
          <Link to="/">Website</Link>
        </h1>
        <ul className="flex gap-8">
          <li className="text-xl font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl font-medium">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
