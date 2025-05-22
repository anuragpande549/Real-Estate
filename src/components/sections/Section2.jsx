import React from "react";
import { section2 } from "../container";


const Section2 = () => {

    const cards = [
      {
        title: "Sell your home",
        text: "We do a free evaluation to be sure you want to start selling.",
        icon: section2[0],
      },
      {
        title: "Rent your home",
        text: "We do a free evaluation to be sure you want to start selling.",
        icon: section2[1],
      },
      {
        title: "Buy a home",
        text: "We do a free evaluation to be sure you want to start selling.",
        icon: section2[2],
      },
      {
        title: "Free marketing",
        text: "We do a free evaluation to be sure you want to start selling.",
        icon: section2[3],
      },
    ];
  return (
    <div
      id="section2"
      className="w-full bg-[#EDEFF6] py-16 px-4 md:px-8 flex flex-col items-center"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-[#1E2640] font-[600] mb-5">
          Properties by Area
        </h2>
        <p className="mt-2 text-[#6C757D] max-w-2xl mx-auto text-sm md:text-base">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Proin sodales ultrices nulla blandit volutpat.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[70px] lg:max-w-[1450px]  w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-[8px] shadow-md p-6 flex flex-col items-start hover:shadow-lg transition-shadow duration-300"
          >
            <img src={card.icon} alt="icon" className="w-10 lg:w-14 lg:h-14 h-10 mb-4" />
            <h3 className="text-[#0C1B33] font-semibold text-lg mb-2">{card.title}</h3>
            <p className="text-[#6C757D] text-sm mb-4">{card.text}</p>
            <a href="#" className="text-[#0056D2] text-sm ">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
