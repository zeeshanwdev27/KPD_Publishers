import React, { useState } from "react";
import MbOverlay from './MBOverlay.jsx'
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Phone } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="py-5 w-full fixed top-0 left-0 z-999 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 md:px-8 lg:justify-evenly">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src="/logo.png"
            alt="Newyour_Publisher_Logo"
            className="w-40 h-12"
          />
        </Link>

        {/* Hamburger Menu for medium and small screens */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black my-1.5 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Menu - Hidden on small/medium, visible on large */}
        <ul className="hidden lg:flex gap-5 justify-center items-center">
          <li className="cursor-pointer transition-colors font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-amber-500" : "hover:text-amber-500"
              }
            >
              Home
            </NavLink>
          </li>

                  {/* Services Dropdown */}
          <li className="relative group cursor-pointer font-medium">
            <span className="hover:text-(--main-color) transition-colors flex items-center gap-1">
              Services
              <ChevronDown
                size={16}
                className="transition-transform group-hover:rotate-180"
              />
            </span>

            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 z-50">
              <li>
                <NavLink
                  to="/book-marketing-services"
                  className={({ isActive }) =>
                    `block px-4 py-2 transition-colors ${
                      isActive
                        ? "bg-amber-500 text-white"
                        : "hover:bg-amber-500 hover:text-white"
                    }`
                  }
                >
                  Book Marketing
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/book-writing-services"
                  className={({ isActive }) =>
                    `block px-4 py-2 transition-colors ${
                      isActive
                        ? "bg-amber-500 text-white"
                        : "hover:bg-amber-500 hover:text-white"
                    }`
                  }
                >
                  Book Writing
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/book-publishing-services"
                  className={({ isActive }) =>
                    `block px-4 py-2 transition-colors ${
                      isActive
                        ? "bg-amber-500 text-white"
                        : "hover:bg-amber-500 hover:text-white"
                    }`
                  }
                >
                  Book Publishing
                </NavLink>
              </li>
            </ul>
          </li>

          {/* <li className="cursor-pointer transition-colors">
            <NavLink
              to="/ourplans"
              className={({ isActive }) =>
                isActive ? "text-amber-500" : "hover:text-amber-500"
              }
            >
              Our Plans
            </NavLink>
          </li> */}

          <li className="cursor-pointer transition-colors font-medium">
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                isActive ? "text-amber-500" : "hover:text-amber-500"
              }
            >
              FAQ'S
            </NavLink>
          </li>

          <li className="cursor-pointer transition-colors font-medium">
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "text-amber-500" : "hover:text-amber-500"
              }
            >
              About Us
            </NavLink>
          </li>



          <li className="cursor-pointer transition-colors font-medium">
            <NavLink
              to="/contact-us/"
              className={({ isActive }) =>
                isActive ? "text-amber-500" : "hover:text-amber-500"
              }
            >
              Contact Us
            </NavLink>
          </li>

        </ul>

        {/* Call To Action - Hidden on small/medium, visible on large */}
        <div className="hidden lg:flex justify-center items-center gap-4">
          <Link
            to="tel:#"
            className="group flex items-center gap-3 px-5 py-3 rounded-md  border border-amber-500  transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="relative">
              <Phone className="w-5 h-5 text-amber-500 " />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-amber-500  rounded-full animate-ping"></div>
            </div>
            <span className="text-amber-500   font-semibold text-sm">
              +1-111-111-1111
            </span>
          </Link>
           <Link to="/contact-us">
          <button className="cursor-pointer px-6 py-3 rounded-md border border-amber-500 bg-amber-500  text-white hover:bg-transparent hover:text-amber-500  transition-all duration-200 font-medium">
            Contact With Us
          </button>
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <MbOverlay isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      )}
    </div>
  );
}

export default Navbar;