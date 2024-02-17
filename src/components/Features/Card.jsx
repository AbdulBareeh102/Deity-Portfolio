import React, { useState, useEffect } from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { id, title, des, icon, links } }) => {
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the position of the element with id=4
      const card4Element = document.getElementById("card-4");
      const card4OffsetTop = card4Element.offsetTop;

      // Check if the user has scrolled past the section with id=4
      if (window.pageYOffset > card4OffsetTop) {
        setShowLinks(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (!links) {
      window.location.href = "/";
    } else {
      setShowLinks(!showLinks);
    }
  };

  return (
    <div
      id={`card-${id}`}
      className="relative w-70 px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group transition-colors duration-100 ease-in-out duration-200"
      onClick={handleClick}
    >
      <div
        className={`h-72 overflow-y-hidden ${showLinks ? "hidden" : "flex"}`}
      >
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
          </div>
        </div>
      )}

      {/* Conditionally render the View More button */}
      {!showLinks && id === 4 && (
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
