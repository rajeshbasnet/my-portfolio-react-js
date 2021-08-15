import React from "react";
import { links } from "../../assets/data/links.js";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="header flex items-center h-20 text-white">
      <div className="logo flex-auto flex justify-center">
        <h3 className="font-rubik font-extrabold">_WEB DEV_</h3>
      </div>

      <div className="nav-container font-rubik flex-auto list-none">
        <nav>
          <ul className="flex items-center justify-around font-rale font-medium">
            {links.map((link, index) => {
              const { links, text } = link;

              return (
                <li key={index}>
                  <a href={links}>{text} </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="profile flex-auto flex justify-center">
        <div className="header-icon flex bg-white py-2 px-3 rounded-xl text-gray-800">
          <button>
            <GiHamburgerMenu className="mr-1" />
          </button>
          <button>
            <FaUserCircle className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
