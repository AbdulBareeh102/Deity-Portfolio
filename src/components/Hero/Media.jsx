import React from "react";
import {
  FaFacebookF,
  FaTelegram,
  FaInstagram,
  FaDiscord,
  FaHtml5,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4 text-designColor">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=100084905980026&mibextid=PtKPJ9">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>

          <a href="https://t.me/Zach_OXL">
            <span className="bannerIcon">
              <FaTelegram />
            </span>
          </a>

          <a href="https://www.instagram.com/deitystudios_?igsh=bWdmNjY5dTFueWh4&utm_source=qr">
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
          <a href="https://discord.gg/DfjxkAT3">
            {" "}
            <span className="bannerIcon">
              <FaDiscord />
            </span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4 text-designColor">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaHtml5 />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
