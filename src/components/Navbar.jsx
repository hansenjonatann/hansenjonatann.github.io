import React, { useState } from "react";
import IconBars from "../Icons/Bars";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="flex items-center justify-between bg-primary  text-secondary py-4 px-10 md:px-16 w-screen overflow-hidden  text-xl sticky">
        <div>
          <h1 className="font-medium">Hansen Jonatan</h1>
        </div>
        <ul className=" hidden md:flex   ">
          <li>
            <a
              href="#"
              className="px-4 py-2 transition duration-300 hover:underline"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="px-4 py-2 transition duration-300 hover:underline"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              to="#contact"
              className="px-4 py-2 transition duration-300 hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
        <button className="md:hidden" onClick={handleToggle}>
          <IconBars />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
