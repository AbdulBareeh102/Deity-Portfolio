import React, { useState, useEffect } from "react";
import { Link, animateScroll } from "react-scroll";
import { ChevronUpIcon } from "@heroicons/react/outline";

const BackToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className="bg-designColor w-12 h-12 hover:text-designColor text-white rounded-full fixed right-24 bottom-24 cursor-pointer flex justify-center items-center transition-all"
      >
        <ChevronUpIcon className="w-8 h-6" />
      </button>
    )
  );
};

export default BackToTopBtn;
