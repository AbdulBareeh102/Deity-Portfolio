import React from "react";

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14 ease-in duration-200">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="text-5xl text-white-400 font-bold capitalize text-designColor">
        {des}
      </h1>
    </div>
  );
};

export default Title;
