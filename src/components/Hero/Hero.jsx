import LeftHero from "./LeftHero";
import RightHero from "./RightHero";
const Hero = () => {
  return (
    // <div className="container ">
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftHero />
      <RightHero />
    </section>
    // </div>
  );
};

export default Hero;
