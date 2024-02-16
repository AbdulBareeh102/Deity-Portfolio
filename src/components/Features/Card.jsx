import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { SiProgress, SiAntdesign } from "react-icons/si";

const Card = ({ item: { id, title, des, icon, links } }) => {
  const [hovered, setHovered] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  // Handle clicking on a feature
  const handleClick = () => {
    // If the feature has no links, navigate back to the home page
    if (!links) {
      window.location.href = "/";
    } else {
      // Otherwise, toggle the display of the links
      setShowLinks(!showLinks);
    }
  };

  // Handle clicking on the "Back Home" button
  const handleBackHomeClick = () => {
    window.location.href = "/"; // Navigate back to the home page
  };

  return (
    <div
      className="relative w-70 px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group transition-colors duration-100 ease-in-out duration-200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <div className={`h-72 overflow-y-hidden ${hovered ? "hidden" : "flex"}`}>
        <div className="flex h-full flex-col gap-10 translate-y-16 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base">{des}</p>
          </div>
        </div>
      </div>

      {showLinks && links && (
        <div className="absolute inset-0 flex items-center justify-center bg-bodyColor-500 bg-opacity-50 rounded-lg p-4">
          <div className="text-white">
            {links.map((url, index) => (
              <div key={index}>
                <a
                  href={url}
                  className="block mb-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  {url}
                </a>
              </div>
            ))}
            {/* Back Home button */}
            <button
              onClick={handleBackHomeClick}
              className="mt-4 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
            >
              Back Home
            </button>
          </div>
        </div>
      )}

      {/* Conditionally render the View More button */}
      {hovered && !showLinks && links && (
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out">
          <div className="bg-bodyColor-500 bg-opacity-50 rounded-lg p-4">
            <span className="text-white flex items-center justify-center">
              View More <HiArrowRight className="ml-2" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
