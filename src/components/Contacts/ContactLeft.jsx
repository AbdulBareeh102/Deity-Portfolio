import React from "react";
import {
  FaFacebookF,
  FaTelegram,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { c1 } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={c1}
        alt="c1"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-designColor">Deity</h3>
        <p className="text-lg font-normal text-gray-400">GAME DEVELOPER</p>
        <p className="text-base text-gray-400 tracking-wide">
          I'm a game developer proficient in 3D animation, Roblox game creation,
          and tools like Blender and Unity. With a passion for innovation, I
          create immersive gaming experiences that captivate players.
        </p>
        <p className="text-base flex items-center gap-2 text-designColor">
          Phone: <span className=" text-designColor">+44 7441 427919</span>
        </p>
        <p className="text-base flex items-center gap-2 text-designColor">
          Email:{" "}
          <span className="Text text-designColor">Deitystudio21@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
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
    </div>
  );
};

export default ContactLeft;
