import React from "react";
import portfolios from "../../assets/datas/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);
  return (
    <div className="w-full h-full fixed flex justify-center top-0 left-0  z-10 bg-white bg-opacity-40">
      <div className="w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/9 z-20  bg-bodyColor rounded-[8px] tramsform-translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            <img className="rounded-[8px]" src={portfolio.Image} alt="" />
          </figure>
        </div>

        <div>
          <h2 className="text-2xl text-designColor font-[700] my-6">
            {portfolio.title}
          </h2>
          <p className="text-[15px] leading-z text-smallTextColor">
            {portfolio.description}
          </p>
          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-designColor text-[18px] text-[700]">
              Technologies
            </h4>
            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-text-designColor text-white py-1 px-2 rounded-[5px] text-[14px] leading-0"
              >
                {item}
              </span>
            ))}
          </div>

          <a href="https://www.instagram.com/deitystudios_?igsh=bWdmNjY5dTFueWh4&utm_source=qr">
            <button className="bg-designColor text-white py-2 px-4 my-8 rounded-[18px] font-[500] hover-bg headingColor ease-in duration-300">
              Live site
            </button>
          </a>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-designColor absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
