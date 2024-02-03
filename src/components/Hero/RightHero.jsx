import { heroImg } from "../../assets";

const RightHero = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className=" w-[400px] h-[400px] lgl:w-[400px] lgl:h-[380px] z-10"
        src={heroImg}
        alt="heroImg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute bottom-0 w-[420px] h-[350px] bg-gradient-to-r from-[#0a192f] to-[#0a192f] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightHero;
