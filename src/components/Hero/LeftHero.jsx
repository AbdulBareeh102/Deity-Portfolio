import { useTypewriter, Cursor } from "react-simple-typewriter";
import React from "react";
import Media from "./Media";

const LeftHero = () => {
  const [text] = useTypewriter({
    words: [
      "Game Developer.",
      "3D Animation.",
      "3D Modelling.",
      "FiveM MLOS.",
      "Web3 Development.",
    ],
    Loop: true,
    typeSpeed: 10,
    delaySpeed: 10,
    deleteSpeed: 200,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Deity</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm a Game developer specializing in turning ideas into interactive
          reality, designing exceptional digital experience. currently, I'm
          focusing in building responsive frontend web application
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftHero;
