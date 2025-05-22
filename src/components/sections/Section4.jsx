import React from "react";
import { imageSection4 } from "../container";


const  [imageSection4_1, imageSection4_2, imageSection4_3, imageSection4_4, ArrowsOut, MapPin] = imageSection4;
const properties = [
  {
    image: imageSection4_1, 
    location: "Washington",
    area: "12000",
  },
  {
    image: imageSection4_2,
    location: "Washington",
    area: "12000",
  },
  {
    image: imageSection4_3,
    location: "Washington",
    area: "12000",
  },
  {
    image: imageSection4_4,
    location: "Washington",
    area: "12000",
  },
];

const Section4 = () => {
  return (
    <div id="Section4" className="bg-white py-[86px] px-4 md:px-12">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-[#1E2640] font-[600] text-3xl md:text-4xl  mb-4">
          Latest Properties of Rent
        </h2>
        <p className="text-[#889099] text-sm md:text-base max-w-2xl mx-auto">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Proin sodales ultrices nulla blandit volutpat.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {properties.map((item, index) => (
          <div
            key={index}
            className="relative rounded-[10px] overflow-hidden  2lg:w-[370px] h-[426px] group"
          >
            <img
              src={item.image}
              alt="Property"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-[#3B4D81]/25 " />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-sm z-10">
              <div className="flex items-center gap-2">
                <img src={MapPin} alt="location icon" className="w-4 h-4" />
                <span className="font-semibold">{item.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={ArrowsOut} alt="area icon" className="w-4 h-4" />
                <span className="font-semibold">{item.area}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-14">
        <button className="bg-[#4A60A1] text-white text-sm px-8 py-3 rounded-md hover:bg-[#163074] transition">
          Load more listing
        </button>
      </div>
    </div>
  );
};

export default Section4;
