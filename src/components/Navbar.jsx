import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between bg-[#191970] text-white py-4 px-8 w-screen font-bold text-md shadow-lg">
        <div>
          <h1>Hansen Jonatan</h1>
        </div>
        <ul className=" hidden md:flex ">
          <li>
            <a
              href="#"
              className="px-4 py-2 transition duration-150 hover:underline"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-2 transition duration-150 hover:underline"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-2 transition duration-150 hover:underline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-2 transition duration-150 hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
