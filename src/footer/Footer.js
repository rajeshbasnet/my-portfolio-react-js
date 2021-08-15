import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer style={{ height: "40vh" }} className="footer font-rubik bg-white flex items-center">
      <div className="footer-container w-8 mx-auto">
        <div className="grid grid-cols-5">
          <div className="first-col flex align-items-center">
            <div>
              <h1 className="font-extrabold text-lg">_WEB DEV_</h1>
              <div className="social-links__container pt-4 flex items-center justify-around">
                <button className="bg-gray-100 p-2 rounded">
                  <FaFacebookF className="color-facebook" />
                </button>
                <button className="bg-gray-100 p-2 rounded">
                  <AiOutlineTwitter className="color -twitter" />
                </button>
                <button className="bg-gray-100 p-2 rounded">
                  <FaYoutube className="color-youtube" />
                </button>
              </div>
            </div>
          </div>

          <div className="second-col">
            <ul>
              <li>
                <a href="" className="font-bold text-lg">
                  Home
                </a>
              </li>
              <br />
              <li className="mt-2">
                <a href="" className="text-gray-500">
                  Partners
                </a>
              </li>
              <li className="mt-2">
                <a href="" className="text-gray-500">
                  Features
                </a>
              </li>
              <li className="mt-2">
                <a href="" className="text-gray-500">
                  Testimonials
                </a>
              </li>
              <li className="mt-2">
                <a href="" className="text-gray-500">
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div className="third-col">
            <ul>
              <li>
                <a href="" className="font-bold text-lg">
                  Pages
                </a>
              </li>
              <br />

              <li className="mt-2">
                <a href="" className="text-gray-500">
                  About Us
                </a>
              </li>
              <li className="mt-2">
                <a href="" className="text-gray-500">
                  Careers
                </a>
              </li>
              <li className="mt-2">
                <a href="" className="text-gray-500">
                  Case Studies
                </a>
              </li>
              <li className="mt-2">
                <a href="" className="text-gray-500">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className="fourth-col">
            <ul>
              <li>
                <a href="" className="font-bold text-lg">
                  Blog
                </a>
              </li>
              <br />

              <li className="mt-2">
                <a href="" className="text-gray-500">
                  Blog Listing
                </a>
              </li>
              <li className="mt-2">
                <a href="" className="text-gray-500">
                  Blog Article
                </a>
              </li>
              <li className="mt-2">
                <a href="" className="text-gray-500">
                  Newsroom
                </a>
              </li>
            </ul>
          </div>

          <div className="last-col">
            <ul>
              <li>
                <a href="" className="font-bold text-lg">
                  Portfolio
                </a>
              </li>
              <br />
              <li className="mt-2">
                <a href="" className="text-gray-500">
                  Portfolio
                </a>
              </li>
              <li className="mt-2">
                <a href="" className="text-gray-500">
                  Single Case
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
