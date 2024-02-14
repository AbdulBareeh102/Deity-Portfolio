import React from "react";
import datas from "../../assets/datas/portfolioData";
import Modal from "./Modal";
import { useState, useEffect } from "react";
const Projects = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(datas);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };
  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };
  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(datas);
    }
    if (selectTab === "Roblox Games") {
      const filteredData = datas.filter(
        (item) => item.category === "Roblox Games"
      );
      setPortfolios(filteredData);
    }
    if (selectTab === "FiveM MLOs") {
      const filteredData = datas.filter(
        (item) => item.category === "FiveM MLOs"
      );
      setPortfolios(filteredData);
    }
    if (selectTab === "3D Animation") {
      const filteredData = datas.filter(
        (item) => item.category === "3D Animation"
      );
      setPortfolios(filteredData);
    }
  }, [selectTab]);

  return (
    // <div className="container">
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center justify-between flex-wrap">
        <div className="mb-7 sm:mb-6">
          <h3 className="text-headingColor text-[2rem] font-[700] text-designColor sm:text-center">
            My Projects
          </h3>
        </div>
        <div className="flex gap-3 text-designColor">
          <button
            onClick={() => setSelectTab("all")}
            className="text-smallTextcolor border border-solid border-smTextColor py-2 px-4 rounded-[8px]"
          >
            All
          </button>
          <button
            onClick={() => setSelectTab("Roblox Games")}
            className="text-smallTextcolor border border-solid border-smTextColor py-2 px-4 rounded-[8px]"
          >
            Roblox Games
          </button>
          <button
            onClick={() => setSelectTab("FiveM MLOs")}
            className="text-smallTextcolor border border-solid border-smTextColor py-2 px-4 rounded-[8px]"
          >
            FiveM MLOs
          </button>
          <button
            onClick={() => setSelectTab("3D Animation")}
            className="text-smallTextcolor border border-solid border-smTextColor py-2 px-4 rounded-[8px]"
          >
            3D Animation
          </button>
        </div>
      </div>
      <div className="w-full xl:px-12 h-auto xl:py-10 rounded-lg flex items-center gap-4 flex-wrap  mt-12 ">
        {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
          <div
            data-aos="fade-zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            key={index}
            className="group max-w-full sm:w-full  mt-4 md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
          >
            <figure>
              <img
                className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
                src={portfolio.Image}
                alt=""
              />
            </figure>
            <div className="w-full h-full  bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
              <div className="w-full h-full flex items-center justify-center">
                <button
                  onClick={() => showModalHandler(portfolio.id)}
                  className="text-designColor bg-bodyColor hover:bg smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        {nextItems < portfolios.length && datas.length > 6 && (
          <button
            onClick={loadMoreHandler}
            className="text-designColor bg-white hover:bg smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
          >
            Load More
          </button>
        )}
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
    // </div>
  );
};

export default Projects;
