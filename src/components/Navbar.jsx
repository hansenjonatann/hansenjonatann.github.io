import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="flex items-center justify-between  text-secondary py-4 px-10 md:px-16 w-screen  text-xl  shadow-lg">
        <div>
          <h1 className="font-bold">Hansen Jonatan</h1>
        </div>
        <ul className=" hidden md:flex font-medium  ">
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
              Contact
            </a>
          </li>
        </ul>
        <button className="md:hidden" onClick={handleToggle}>
          <FaBars />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
