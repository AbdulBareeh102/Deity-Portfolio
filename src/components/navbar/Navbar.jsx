import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { deity } from "../../assets/index";
import { navLinksdata } from "../constants";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-full h-24 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      {/* <div className="container"> */}
      {/* <div className="flex items-center justify-between "> */}
      <div>
        <img src={deity} alt="logo" Image style={{ width: "70px" }} />
      </div>

      {/*menu*/}
      <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
        {navLinksdata.map(({ _id, title, link }) => (
          <li
            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            key={_id}
          >
            <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      {/*Hamurger*/}
      <div
        onClick={handleClick}
        className="text-xl md:hidden bg-black z-10 w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
      >
        {!nav ? (
          <FaBars style={{ width: "100px", height: "30px" }} />
        ) : (
          <FaTimes style={{ width: "100px", height: "30px" }} />
        )}
      </div>

      {/*Mobile menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-bodyColor flex flex-col justify-center items-center cursor-pointer hover:text-designColor duration-300"
        }
      >
        {" "}
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="features"
            smooth={true}
            duration={500}
          >
            Features
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contacts
          </Link>
        </li>
      </ul>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
