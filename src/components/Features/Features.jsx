import React from "react";
import Title from "../Layout/Title";
import Card from "./Card";
import { featuresData } from "../data/data";
const Features = () => {
  return (
    <div className="container">
      <section
        id="features"
        data-aos="fade-zoom-in"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="w-full py-20 border-b-[1px] border-b-black ease-in duration-200"
      >
        <Title title="" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          {featuresData.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
