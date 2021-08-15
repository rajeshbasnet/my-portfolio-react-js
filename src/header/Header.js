import React from "react";
import Navbar from "./navbar/Navbar";
import backgroundImage from "../assets/bg_img.jpg";
import { BsChevronDoubleDown } from "react-icons/bs";

const Header = () => {
  return (
    <header className="h-screen w-screen overflow-hidden">
      <Navbar />
      <div style={{ zIndex: "-1" }} className="background-img w-screen h-screen absolute top-0">
        <img src={backgroundImage} alt="background-image" className="w-full h-full object-cover" />
      </div>

      <div style={{ zIndex: "-1" }} className="overlay-header w-screen h-screen absolute bg-opacity-20 top-0"></div>

      <div className="hero-text absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 font-rale text-white">
        <h2 style={{ fontSize: "2.50rem" }} className="font-bold uppercase leading-snug">
          Personal Portfolio
        </h2>
        <h3 className="text-4xl font-medium leading-snug">Everything I have learnt till now</h3>
        <button className="font-rubik py-3 px-8 color-primary mt-3">Explore More</button>
      </div>
      <div className="chevron-down absolute bottom-20 left-1/2 text-4xl transform -translate-x-1/2 text-white">
        <a href="#about" className="hover:text-white">
          <BsChevronDoubleDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
